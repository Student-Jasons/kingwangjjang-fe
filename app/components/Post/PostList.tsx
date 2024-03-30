import React, { useCallback } from 'react'
import { PostCard } from './PostCard';
import { List, ListItem } from '@mui/material';
import { AllRealtimeQuery } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import { gql } from '@/gql/gql';
import { useGPTStore } from "@/stores/board";

const realtimqQuery = gql(`
query AllRealtime {
  allRealtime {
      Id
      site
      title
      url
      createTime
      GPTAnswer
  }
}`);

export const PostList = () => {
    const { setAnswer } = useGPTStore();
    const { loading, error, data } = useQuery<AllRealtimeQuery>(realtimqQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const handlePostCardClick = useCallback((id: string) => {
        if (data?.allRealtime) {
            const clickedItem = data.allRealtime.find(item => item?.Id === id);
            if (clickedItem) {
                setAnswer(clickedItem.GPTAnswer);
            }
        }
    }, [data, setAnswer]);

    return (
        <List sx={{
            maxHeight: 500,
            overflow: "auto",
            }} >
            {data?.allRealtime && data?.allRealtime.map((board, index) => (
                board && (
                    <ListItem key={index}>
                        <PostCard
                            onClick={() => handlePostCardClick(board.Id)} 
                            id={board.Id}
                            site={board.site} 
                            title={board.title} 
                            url={board.url} 
                            createTime={new Date(board.createTime)} 
                            GPTAnswer={board.GPTAnswer}
                            />
                    </ListItem>
                )
            ))}
        </List>
    );
};