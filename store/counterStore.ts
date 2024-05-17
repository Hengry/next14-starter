import { create } from 'zustand';

interface BearState {
  counts: number;
  increase: () => void;
}

const useConterStore = create<BearState>()((set) => ({
  counts: 0,
  increase: () => set((state) => ({ counts: state.counts + 1 })),
}));

export default useConterStore;
