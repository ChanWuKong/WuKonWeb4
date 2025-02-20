import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(124, 58, 237, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Features = () => {
  const features = [
    {
      title: "多平台支持",
      description: "完美兼容苹果手机、平板和电脑，随时随地畅享翻译服务"
    },
    {
      title: "先进AI技术",
      description: "采用尖端AI技术，提供准确流畅的翻译体验，几乎零延迟"
    },
    {
      title: "40+种语言",
      description: "支持40多种语言之间的即时互译，轻松应对各种场景需求"
    },
    {
      title: "离线翻译",
      description: "支持离线使用，无需网络也能随时随地进行翻译"
    },
    {
      title: "场景全覆盖",
      description: "无论旅行、商务还是文化交流，都能帮您轻松突破语言障碍"
    },
    {
      title: "语音识别",
      description: "支持实时语音识别和翻译，让口语交流更加自然流畅"
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <FeaturesSection>
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Title variants={itemVariants}>强大功能</Title>
        <Grid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={itemVariants}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 