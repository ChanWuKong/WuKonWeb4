import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(0deg, ${({ theme }) => theme.colors.background} 0%, rgba(124, 58, 237, 0.1) 100%);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled(motion.button)`
  width: 100%;
  text-align: left;
  padding: 20px;
  background: rgba(124, 58, 237, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(124, 58, 237, 0.1);
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: 500;
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }
`;

const Answer = styled(motion.div)`
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  overflow: hidden;
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "筋斗云支持哪些设备？",
      answer: "筋斗云完美支持苹果手机、iPad平板以及Mac电脑，让您在任何设备上都能享受流畅的翻译体验。"
    },
    {
      question: "支持哪些语言？",
      answer: "筋斗云支持40多种语言之间的实时互译，覆盖全球主要语种，满足您在各种场景下的翻译需求。"
    },
    {
      question: "翻译速度如何？",
      answer: "得益于先进的AI技术，筋斗云提供几乎零延迟的实时翻译，让您的交流自然流畅。"
    },
    {
      question: "适用于哪些场景？",
      answer: "筋斗云适用于旅行、商务会议、文化交流等各种场景，帮助您轻松突破语言障碍，促进全球交流。"
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <FAQSection>
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Title variants={itemVariants}>常见问题</Title>
        {faqs.map((faq, index) => (
          <FAQItem key={index} variants={itemVariants}>
            <Question
              onClick={() => toggleQuestion(index)}
              whileTap={{ scale: 0.98 }}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </Question>
            <AnimatePresence>
              {activeIndex === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </Container>
    </FAQSection>
  );
};

export default FAQ; 