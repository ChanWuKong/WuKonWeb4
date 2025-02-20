import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
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

const RegisterPrompt = styled(motion.div)`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(124, 58, 237, 0.2);
`;

const RegisterButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  border: 1px solid rgba(124, 58, 237, 0.3);
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }
`;

const VerificationSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const VerificationInput = styled(Input)`
  margin-bottom: 0;
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

type AuthStep = 'login' | 'register' | 'verification' | 'complete';

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<AuthStep>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [username, setUsername] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = () => {
    // TODO: 发送验证码逻辑
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const renderContent = () => {
    switch (step) {
      case 'login':
        return (
          <>
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              登录
            </Button>
            <RegisterPrompt>
              <div>还没有账号？</div>
              <RegisterButton
                onClick={() => setStep('register')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✨ 立即注册 ✨
              </RegisterButton>
            </RegisterPrompt>
          </>
        );

      case 'register':
        return (
          <>
            <Title>注册</Title>
            <Input
              type="email"
              placeholder="电子邮箱"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <VerificationSection>
              <VerificationInput
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
              onClick={() => setStep('complete')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              下一步
            </Button>
          </>
        );

      case 'complete':
        return (
          <>
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
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </CloseButton>
            {renderContent()}
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default AuthModal; 