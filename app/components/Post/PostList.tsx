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
                maxHeight: 300,
                overflow: "auto",
                width: "100%",
                position: "relative",
                }} >
                {PostList.map((board, index) => (
                    <ListItem 
                    key={index} 
                    sx={{
                    }}>
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