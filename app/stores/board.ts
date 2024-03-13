import { create } from 'zustand'

interface GPTStore {
  answer: string
}

export const useGPTStore = create<GPTStore>((set) => ({
  answer: 'GPT 요약 중..',
}))