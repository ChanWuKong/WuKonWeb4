import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthBackground from '../components/AuthBackground';
import { authService } from '../services/authService';
import { toast } from 'react-hot-toast';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const AuthCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  position: relative;
  z-index: 1;
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-bottom: 0.25rem;
  }
`;

// 复用之前的样式组件
const Title = styled.h2`
  margin-bottom: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  color: white;
  font-weight: 500;
  margin-top: 1rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 10;
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }
`;

const RegisterPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const VerificationSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SendCodeButton = styled(motion.button)`
  padding: 0 1rem;
  border-radius: 8px;
  background: rgba(124, 58, 237, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    margin-left: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegister = location.pathname === '/register';
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [username, setUsername] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    if (!email) {
      toast.error('请输入邮箱地址');
      return;
    }
    
    try {
      setIsLoading(true);
      await authService.sendVerificationCode(email);
      setCountdown(60);
      toast.success('验证码已发送');
      
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !verificationCode || !username || !password || !confirmPassword) {
      toast.error('请填写所有必填项');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error('两次输入的密码不一致');
      return;
    }
    
    try {
      setIsLoading(true);
      
      if (!authService.verifyCode(email, verificationCode)) {
        throw new Error('验证码错误或已过期');
      }
      
      authService.register(email, username, password);
      toast.success('注册成功');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('请填写邮箱和密码');
      return;
    }
    
    try {
      setIsLoading(true);
      const user = authService.login(email, password);
      toast.success('登录成功');
      // 在实际项目中，这里应该保存用户token
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderRegisterStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <LogoWrapper>
              <img src="/assets/logo.png" alt="筋斗云" />
            </LogoWrapper>
            <Title>注册</Title>
            <Input
              type="email"
              placeholder="电子邮箱"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <VerificationSection>
              <Input
                type="text"
                placeholder="验证码"
                value={verificationCode}
                onChange={e => setVerificationCode(e.target.value)}
              />
              <SendCodeButton
                onClick={handleSendCode}
                disabled={countdown > 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {countdown > 0 ? `${countdown}s` : '发送验证码'}
              </SendCodeButton>
            </VerificationSection>
            <Button
              onClick={() => setStep(2)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              下一步
            </Button>
            <LoginPrompt>
              已有账户？
              <a href="/login" onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}>
                立即开始
              </a>
            </LoginPrompt>
          </>
        );
      case 2:
        return (
          <>
            <LogoWrapper>
              <img src="/assets/logo.png" alt="筋斗云" />
            </LogoWrapper>
            <Title>完善信息</Title>
            <Input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="设置密码"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="确认密码"
            />
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              完成注册
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <AuthBackground />
      <BackButton
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ←
      </BackButton>
      <AuthCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isRegister ? (
          renderRegisterStep()
        ) : (
          <>
            <LogoWrapper>
              <img src="/assets/logo.png" alt="筋斗云" />
            </LogoWrapper>
            <Title>登录</Title>
            <Input
              type="email"
              placeholder="电子邮箱"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="密码"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              onClick={handleLogin}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? '处理中...' : '登录'}
            </Button>
            <RegisterPrompt>
              还没有账号？{' '}
              <a href="/register" onClick={(e) => {
                e.preventDefault();
                navigate('/register');
              }}>
                立即注册
              </a>
            </RegisterPrompt>
          </>
        )}
      </AuthCard>
    </Container>
  );
};

export default Auth; 