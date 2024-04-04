import { create } from 'zustand';
import { PostCardType } from '@/types/board-type';

interface GPTStore {
  id: number;
  answer: string;
  setAnswer: (answer: string) => void;
  setAnswerById: (id: string, data: PostCardType[]) => void;
}

export const useGPTStore = create<GPTStore>((set) => ({
  id: 0,
  answer: 'GPT 생성 중입니다. 이미지가 많은 경우 오래 걸립니다.',
  setAnswer: (value: string) => set(() => ({ answer: value })),
  setAnswerById: (id: string, data: PostCardType[]) => {
    console.log(data)
    const post = data.find((item) => item.id === id);
    if (post) {
      set({ answer: post.GPTAnswer });
    } else {
      set({ answer: '해당 ID에 대한 데이터를 찾을 수 없습니다.' });
    }
  },
}));
