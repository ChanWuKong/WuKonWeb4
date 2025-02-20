import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0.3;
`;

const Bubble = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  opacity: 0.4;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0.8);
  }
`;

const AuthBackground = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
    rotate: Math.random() * 360
  }));

  return (
    <BackgroundWrapper>
      {bubbles.map(bubble => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          initial={{ 
            x: `${bubble.x}vw`, 
            y: '100vh',
            rotate: bubble.rotate,
            opacity: 0.4
          }}
          animate={{
            y: '-20vh',
            rotate: bubble.rotate + 360,
            opacity: [0.4, 0.4, 0],
            x: [
              `${bubble.x}vw`,
              `${bubble.x + (Math.random() * 20 - 10)}vw`,
              `${bubble.x}vw`
            ]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img src="/assets/pp.png" alt="" />
        </Bubble>
      ))}
    </BackgroundWrapper>
  );
};

export default AuthBackground; 