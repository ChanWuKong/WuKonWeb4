import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 32px;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SettingsButton = styled(motion.button)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }
`;

const AuthButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid rgba(124, 58, 237, 0.3);
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DownloadButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const { isSoundOn, toggleSound } = useSound();

  return (
    <Nav>
      <Logo>
        <img src="/assets/logo.png" alt="筋斗云" />
        筋斗云
      </Logo>
      
      <NavRight>
        <SettingsButton
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          ⚙️
        </SettingsButton>
        
        <AuthButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/login')}
        >
          登录
        </AuthButton>
        
        <DownloadButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          立即下载
        </DownloadButton>
      </NavRight>
    </Nav>
  );
};

export default Navbar; 