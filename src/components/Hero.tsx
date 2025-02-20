import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, rgba(5, 5, 5, 1) 70%);
    z-index: 0;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.3);
  }

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.2);
    z-index: -1;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 2rem;
`;

const GradientText = styled(motion.span)`
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 2rem;
  transform: translateX(4rem);
`;

const RocketIcon = styled(motion.img)`
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin-left: -1rem;
  transform: translateX(-0.5rem);
`;

const Cursor = styled(motion.span)`
  display: inline-block;
  width: 3px;
  height: 4.5rem;
  background: #7C3AED;
  margin-left: 2px;
  vertical-align: middle;
`;

const TypewriterText = styled(motion.span)`
  display: inline-block;
  line-height: 1.2;
  white-space: nowrap;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.8;
  transform: translateX(2rem);
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2.5rem;
  justify-content: center;
  align-items: center;
  transform: translateX(2rem);
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const CyberButton = styled(motion.button)`
  position: relative;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 8px;
    animation: borderGlow 3s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(124, 58, 237, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3s linear infinite;
  }
  
  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(124, 58, 237, 0.3);
      box-shadow: 0 0 10px rgba(124, 58, 237, 0.2);
    }
    50% {
      border-color: rgba(124, 58, 237, 0.6);
      box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
    }
  }
  
  @keyframes shine {
    0% {
      transform: rotate(45deg) translateX(-100%);
    }
    100% {
      transform: rotate(45deg) translateX(100%);
    }
  }
`;

const Arrow = styled(motion.span)`
  display: inline-block;
  margin-left: 8px;
  font-size: 1.2rem;
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  color: white;
  border: none;
  cursor: pointer;
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid rgba(124, 58, 237, 0.3);
  cursor: pointer;
`;

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowAnimation = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const cursorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const MarqueeContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 30px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  transition: opacity 0.3s ease-out;
  opacity: ${(props) => props.$isVisible ? 1 : 0};
`;

const MarqueeText = styled(motion.div)`
  white-space: nowrap;
  font-size: 6rem;
  font-weight: bold;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
  -webkit-text-fill-color: transparent;
  letter-spacing: 8px;
  display: flex;
  gap: 2rem;
  opacity: 0.25;
`;

const MarqueeItem = styled.span`
  display: inline-block;
  padding-right: 4rem;
`;

const useScrollVisibility = (threshold = 100) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const text = "筋斗云~寰宇任我行";

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 1 + (i * 0.1), // 基础延迟1秒，每个字符增加0.1秒
      }
    })
  };

  const rocketVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1 + (text.length * 0.1), // 等所有文字显示完后再显示
        duration: 0.5
      }
    }
  };

  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  const isMarqueeVisible = useScrollVisibility(200);  // 200px后开始淡出

  return (
    <HeroSection>
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LogoContainer
          variants={itemVariants}
          animate="animate"
          initial="initial"
        >
          <motion.div
            initial={glowAnimation.initial}
            animate={glowAnimation.animate}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          />
          <motion.div
            initial={floatAnimation.initial}
            animate={floatAnimation.animate}
          >
            <img src="/assets/logo.png" alt="筋斗云" />
          </motion.div>
        </LogoContainer>
        <Title variants={itemVariants}>
          突破语言的界限
          <GradientText>
            {text.split('').map((char, index) => (
              <TypewriterText
                key={index}
                custom={index}
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </TypewriterText>
            ))}
            <Cursor
              variants={cursorVariants}
              initial="hidden"
              animate="visible"
            />
            <RocketIcon
              src="/Aiphoto/rocket.png"
              alt="rocket"
              variants={rocketVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                rotate: 15,
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            />
          </GradientText>
        </Title>
        <Subtitle
          variants={itemVariants}
          transition={{ delay: 0.3 }}
        >
          40多种语言实时翻译，AI驱动的智能助手
          让全球沟通变得如此简单
        </Subtitle>
        <ButtonGroup variants={itemVariants}>
          <ButtonRow>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              开始驾驭筋斗云
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(124, 58, 237, 0.8)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              你在说啥？
            </SecondaryButton>
          </ButtonRow>
          <CyberButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            更多泡泡 | 持续袭来
            <Arrow
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </Arrow>
          </CyberButton>
        </ButtonGroup>
      </HeroContent>
      <MarqueeContainer $isVisible={isMarqueeVisible}>
        <MarqueeText
          animate="animate"
          variants={marqueeVariants}
        >
          {[...Array(6)].map((_, index) => (
            <MarqueeItem key={index}>
              筋斗云~寰宇任我行
            </MarqueeItem>
          ))}
        </MarqueeText>
      </MarqueeContainer>
    </HeroSection>
  );
};

export default Hero; 