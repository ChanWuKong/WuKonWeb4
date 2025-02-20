import axios from 'axios';

interface User {
  email: string;
  username: string;
  password: string;
}

interface VerificationCode {
  email: string;
  code: string;
  expiry: number;
}

class AuthService {
  private readonly USERS_KEY = 'app_users';
  private readonly CODES_KEY = 'verification_codes';
  private readonly CODE_EXPIRY = 5 * 60 * 1000; // 5分钟有效期
  
  // 腾讯云配置
  private readonly SECRET_ID = '你的SecretId';
  private readonly SECRET_KEY = '你的SecretKey';
  private readonly SDK_APP_ID = '你的SmsSdkAppId';
  private readonly TEMPLATE_ID = '你的模板ID';
  private readonly SIGN_NAME = '你的短信签名';

  // 获取所有用户
  private getUsers(): User[] {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // 保存用户
  private saveUsers(users: User[]) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // 获取验证码
  private getCodes(): VerificationCode[] {
    const codes = localStorage.getItem(this.CODES_KEY);
    return codes ? JSON.parse(codes) : [];
  }

  // 保存验证码
  private saveCodes(codes: VerificationCode[]) {
    localStorage.setItem(this.CODES_KEY, JSON.stringify(codes));
  }

  // 发送验证码
  async sendVerificationCode(email: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const codes = this.getCodes();
    
    // 清除过期的验证码
    const validCodes = codes.filter(c => c.expiry > Date.now());
    
    try {
      // 调用腾讯云API发送短信
      const response = await axios.post('https://sms.tencentcloudapi.com', {
        SecretId: this.SECRET_ID,
        SecretKey: this.SECRET_KEY,
        SmsSdkAppId: this.SDK_APP_ID,
        SignName: this.SIGN_NAME,
        TemplateId: this.TEMPLATE_ID,
        TemplateParamSet: [code],
        PhoneNumberSet: [email], // 这里假设email是手机号
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-TC-Action': 'SendSms',
          'X-TC-Version': '2021-01-11',
          'X-TC-Region': 'ap-guangzhou'
        }
      });

      if (response.data.Response.SendStatusSet[0].Code === 'Ok') {
        // 保存验证码记录
        validCodes.push({
          email,
          code,
          expiry: Date.now() + this.CODE_EXPIRY
        });
        
        this.saveCodes(validCodes);
        return code;
      } else {
        throw new Error('发送验证码失败');
      }
    } catch (error) {
      console.error('发送验证码错误:', error);
      throw new Error('发送验证码失败，请稍后重试');
    }
  }

  // 验证验证码
  verifyCode(email: string, code: string): boolean {
    const codes = this.getCodes();
    const validCode = codes.find(
      c => c.email === email && 
          c.code === code && 
          c.expiry > Date.now()
    );
    return !!validCode;
  }

  // 注册
  register(email: string, username: string, password: string): boolean {
    const users = this.getUsers();
    
    // 检查邮箱是否已注册
    if (users.some(u => u.email === email)) {
      throw new Error('该邮箱已被注册');
    }
    
    // 添加新用户
    users.push({ email, username, password });
    this.saveUsers(users);
    return true;
  }

  // 登录
  login(email: string, password: string): User {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('邮箱或密码错误');
    }
    
    return user;
  }
}

export const authService = new AuthService(); 