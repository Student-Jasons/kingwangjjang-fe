    import React from 'react'
    import { PostCardType } from '@/types/board-type';
    import { PostCard } from './PostCard';
    import { List, ListItem } from '@mui/material';

    interface Props {
        PostList: PostCardType[];
    }
    
    export const PostList = ({ PostList }: Props) => {
        return (
            <List sx={{
                maxHeight: 500,
                overflow: "auto",
                }} >
                {PostList.map((board, index) => (
                    <ListItem key={index}>
                        <PostCard 
                            site={board.site} 
                            title={board.title} 
                            url={board.url} 
                            createTime={board.createTime}/>
                    </ListItem>
                ))}
            </List>
        );
    };