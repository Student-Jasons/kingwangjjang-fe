import React from 'react'
import { BoardCardType } from '@/types/board-type';
import { BoardCard } from './BoardCard';

interface Props {
    boardList: BoardCardType[];
}
  
export const BoardList = ({ boardList }: Props) => {
    return (
        <div>
            {boardList.map((board, index) => (
                <BoardCard key={index} site={board.site} 
                    title={board.title} 
                    url={board.url} 
                    createTime= {board.createTime}/>
            ))}
        </div>
    );
};