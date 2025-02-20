import React, { useEffect, useRef } from 'react';
import { useSound } from '../hooks/useSound';

const BubbleSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isSoundOn } = useSound();

  useEffect(() => {
    if (!isSoundOn) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    // 创建音频上下文
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // 创建振荡器
    const createBubbleSound = () => {
      const oscillator = audioContext.createOscillator();
      const filterNode = audioContext.createBiquadFilter();
      const gainNode = audioContext.createGain();
      
      // 设置滤波器
      filterNode.type = 'bandpass';
      filterNode.frequency.value = Math.random() * 300 + 800; // 800-1100Hz，更清脆的啵啵声
      filterNode.Q.value = 10; // 更窄的频带，声音更突出
      
      // 添加低通滤波器模拟水下效果
      const lowPassFilter = audioContext.createBiquadFilter();
      lowPassFilter.type = 'lowpass';
      lowPassFilter.frequency.value = 2000;
      lowPassFilter.Q.value = 1;
      
      // 连接节点
      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(lowPassFilter);
      lowPassFilter.connect(audioContext.destination);
      
      // 设置频率
      const randomFreq = Math.random() * 200 + 600; // 600-800Hz
      oscillator.frequency.value = randomFreq;
      oscillator.type = 'triangle';
      
      // 设置音量渐变
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
      
      // 启动和停止
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.05);
      
      // 快速的频率滑动模拟啵啵声
      oscillator.frequency.exponentialRampToValueAtTime(
        randomFreq * 1.8,
        audioContext.currentTime + 0.04
      );

      // 修改噪声参数
      const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.05, audioContext.sampleRate);
      const noise = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        noise[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioContext.sampleRate * 0.01));
      }
      
      const noiseNode = audioContext.createBufferSource();
      const noiseGain = audioContext.createGain();
      noiseNode.buffer = noiseBuffer;
      noiseGain.gain.setValueAtTime(0.3, audioContext.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.04);
      
      noiseNode.connect(noiseGain);
      noiseGain.connect(lowPassFilter);
      noiseNode.start();
    };

    // 随机播放泡泡音效
    const playRandomBubble = () => {
      if (Math.random() < 0.5) { // 增加播放概率
        createBubbleSound();
      }
      
      // 设置下一次播放的时间
      timeoutRef.current = setTimeout(playRandomBubble, Math.random() * 300 + 200);
    };

    // 开始播放
    playRandomBubble();

    // 清理函数
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [isSoundOn]);

  return null;
};

export default BubbleSound; 