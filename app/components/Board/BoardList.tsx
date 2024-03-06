    import React from 'react'
    import { BoardCardType } from '@/types/board-type';
    import { BoardCard } from './BoardCard';
    import { List, ListItem } from '@mui/material';

    interface Props {
        boardList: BoardCardType[];
    }
    
    export const BoardList = ({ boardList }: Props) => {
        return (
            <List sx={{
                maxHeight: 300,
                overflow: "auto",
                width: "100%",
                position: "relative",
                }} >
                {boardList.map((board, index) => (
                    <ListItem 
                    key={index} 
                    sx={{
                    }}>
                        <BoardCard 
                            site={board.site} 
                            title={board.title} 
                            url={board.url} 
                            createTime={board.createTime}/>
                    </ListItem>
                ))}
            </List>
        );
    };