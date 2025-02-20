import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IntegrationsSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.background} 0%, rgba(124, 58, 237, 0.1) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const IntegrationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const IconPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 12px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-top: 2rem;
  text-align: center;
`;

const Integrations = () => {
  const integrations = [
    { 
      name: "出国旅游",
      description: "轻松应对各种旅行场景"
    },
    { 
      name: "外贸交流",
      description: "跨境贸易无语言障碍"
    },
    { 
      name: "商务洽谈",
      description: "让商务会议更加顺畅"
    },
    { 
      name: "即时翻译",
      description: "随时随地实时对话"
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <IntegrationsSection>
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1 variants={itemVariants}>40国语言即时交流</motion.h1>
        <Grid>
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={index}
              variants={itemVariants}
            >
              <IconPlaceholder />
              <h3>{integration.name}</h3>
              <p>{integration.description}</p>
            </IntegrationCard>
          ))}
        </Grid>
        <Subtitle variants={itemVariants}>
          支持40多种语言实时互译，覆盖全球主要语种
        </Subtitle>
      </Container>
    </IntegrationsSection>
  );
};

export default Integrations; 