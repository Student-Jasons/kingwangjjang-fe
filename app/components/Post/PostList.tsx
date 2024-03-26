    import React from 'react'
    import { PostCardType } from '@/types/board-type';
    import { PostCard } from './PostCard';
    import { List, ListItem } from '@mui/material';

    interface Props {
        PostList: PostCardType[];
        handlePostCardClick: (id: String) => void;
    }
    
    export const PostList = ({ PostList, handlePostCardClick }: Props) => {
        return (
            <List sx={{
                maxHeight: 500,
                overflow: "auto",
                }} >
                {PostList.map((board, index) => (
                    <ListItem key={index}>
                        <PostCard
                            onClick={()=>handlePostCardClick(board.id)}
                            id={board.id}
                            site={board.site} 
                            title={board.title} 
                            url={board.url} 
                            createTime={board.createTime}
                            GPTAnswer={board.GPTAnswer}
                            />
                    </ListItem>
                ))}
            </List>
        );
    };