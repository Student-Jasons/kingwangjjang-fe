import { create } from 'zustand';
import { PostCardType } from '@/types/board-type';

interface GPTStore {
  id: number;
  answer: String;
  setAnswerById: (id: String, data: PostCardType[]) => void;
}

export const useGPTStore = create<GPTStore>((set) => ({
  id: 0,
  answer: 'GPT 요약 중...',
  setAnswerById: (id: String, data: PostCardType[]) => {
    console.log(data)
    const post = data.find((item) => item.id === id);
    if (post) {
      set({ answer: post.GPTAnswer });
    } else {
      set({ answer: '해당 ID에 대한 데이터를 찾을 수 없습니다.' });
    }
  },
}));
