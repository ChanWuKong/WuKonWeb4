import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 3rem;
`;

const TestimonialTrack = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
`;

const TestimonialCard = styled(motion.div)`
  flex: 0 0 400px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(124, 58, 237, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(124, 58, 237, 0.5),
      transparent
    );
  }

  &::after {
    content: '"';
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 4rem;
    color: rgba(124, 58, 237, 0.1);
    font-family: serif;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #7C3AED, #2563EB);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
`;

const UserName = styled.div`
  h4 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Comment = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 1rem;
  opacity: 0.8;
`;

const testimonials = [
  {
    name: "张先生",
    location: "北京",
    comment: "筋斗云让我的跨境业务变得如此简单，实时翻译功能非常准确，帮我节省了大量时间。",
    initial: "张"
  },
  {
    name: "Sarah Johnson",
    location: "New York",
    comment: "Amazing tool! The AI-powered translation is incredibly accurate and has helped me communicate effectively with clients worldwide.",
    initial: "S"
  },
  {
    name: "田中さん",
    location: "東京",
    comment: "ビジネスでの使用が簡単で、翻訳の精度が高く、とても満足しています。",
    initial: "田"
  },
  {
    name: "李小姐",
    location: "上海",
    comment: "出国旅游时用筋斗云，完全不用担心语言问题，各种场景下都能轻松应对。",
    initial: "李"
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid",
    comment: "La mejor herramienta de traducción que he usado. La integración con múltiples modelos de IA es fantástica.",
    initial: "C"
  }
];

const Testimonials = () => {
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

  const trackVariants = {
    animate: {
      x: [-1200, -2400],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear"
        }
      }
    }
  };

  return (
    <TestimonialsSection>
      <Container
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Title variants={itemVariants}>用户反馈</Title>
        <TestimonialTrack
          variants={trackVariants}
          animate="animate"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.1)"
              }}
            >
              <UserInfo>
                <Avatar>{testimonial.initial}</Avatar>
                <UserName>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </UserName>
              </UserInfo>
              <Comment>{testimonial.comment}</Comment>
            </TestimonialCard>
          ))}
        </TestimonialTrack>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 