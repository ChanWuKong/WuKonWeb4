import { create } from 'zustand';

interface SoundStore {
  isSoundOn: boolean;
  toggleSound: () => void;
}

export const useSoundStore = create<SoundStore>((set) => ({
  isSoundOn: false,
  toggleSound: () => set((state) => ({ isSoundOn: !state.isSoundOn })),
}));

export const useSound = () => {
  const { isSoundOn, toggleSound } = useSoundStore();
  return { isSoundOn, toggleSound };
}; 