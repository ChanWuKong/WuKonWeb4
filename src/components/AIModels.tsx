import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AISection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;
`;

const ModelCard = styled(motion.div)`
  position: relative;
  
  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #7C3AED, #2563EB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const models = [
  {
    name: 'ChatGPT',
    image: '/Aiphoto/ChatGPT.png',
    description: '开创性的大语言模型，强大的对话能力'
  },
  {
    name: 'Deepseek',
    image: '/Aiphoto/deepseek.png',
    description: '专注于深度学习的AI助手，精准的专业解答'
  },
  {
    name: 'Gemini',
    image: '/Aiphoto/gemini.png',
    description: 'Google最新多模态AI，跨领域理解能力'
  },
  {
    name: 'Grok',
    image: '/Aiphoto/Grok.png',
    description: '实时学习的AI，富有个性的对话风格'
  },
  {
    name: 'Kimi',
    image: '/Aiphoto/kimi.png',
    description: '注重隐私的AI助手，安全可靠的对话体验'
  },
  {
    name: 'Qwen',
    image: '/Aiphoto/Qwen.png',
    description: '通义千问，中文理解能力出众的AI模型'
  }
];

const AIModels = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatVariants = {
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

  return (
    <AISection>
      <Container
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Title variants={itemVariants}>强大LLM模型</Title>
        <Subtitle variants={itemVariants}>
          集成多个顶尖AI大语言模型，为您提供全方位的智能对话服务。
          每个模型都有其独特优势，共同打造极致翻译体验。
        </Subtitle>
        <ModelGrid>
          {models.map((model, index) => (
            <ModelCard
              key={model.name}
              variants={itemVariants}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
              >
                <img src={model.image} alt={model.name} />
              </motion.div>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
            </ModelCard>
          ))}
        </ModelGrid>
      </Container>
    </AISection>
  );
};

export default AIModels; 