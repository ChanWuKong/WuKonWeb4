import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BubbleSound from './BubbleSound';

const BubbleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const LogoBubble = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  opacity: 0.4;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(1.2);
  }
`;

const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 50, // 50-130px
    x: Math.random() * 100,
    delay: Math.random() * 5, // 减少初始延迟，让泡泡更快出现
    duration: Math.random() * 15 + 20, // 20-35s
    rotate: Math.random() * 360,
  }));

  return (
    <BubbleWrapper>
      <BubbleSound />
      {bubbles.map(bubble => (
        <LogoBubble
          key={bubble.id}
          size={bubble.size}
          initial={{ 
            x: `${bubble.x}vw`, 
            y: `${100 + Math.random() * 50}vh`, // 随机起始位置
            rotate: bubble.rotate,
            opacity: 0.4
          }}
          animate={{
            y: '-100vh',
            opacity: [0.4, 0.4, 0.4, 0],
            rotate: bubble.rotate + 360,
            x: [
              `${bubble.x}vw`,
              `${bubble.x + (Math.random() * 50 - 25)}vw`,
              `${bubble.x + (Math.random() * 50 - 25)}vw`,
              `${bubble.x}vw`
            ]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src="/assets/pp.png" alt="" />
        </LogoBubble>
      ))}
    </BubbleWrapper>
  );
};

export default FloatingBubbles; 