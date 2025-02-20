import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(124, 58, 237, 0.1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  z-index: 100;
  backdrop-filter: blur(8px);
`;

const SoundToggle = () => {
  const { isSoundOn, toggleSound } = useSound();

  return (
    <ToggleButton
      onClick={toggleSound}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isSoundOn ? '🔊' : '🔈'}
    </ToggleButton>
  );
};

export default SoundToggle; 