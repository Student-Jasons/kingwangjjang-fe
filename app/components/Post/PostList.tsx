import React, { useCallback } from 'react'
import { PostCard } from './PostCard';
import { List, ListItem } from '@mui/material';
import { AllRealtimeQuery } from '@/gql/graphql';
import { useMutation, useQuery } from '@apollo/client';
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

const SUMMARY_BOARD = gql(`
  mutation SummaryBoard($boardId: String!) {
    summaryBoard(boardId: $boardId) {
      response
    }
  }
`);

export const PostList = () => {
    const { setAnswer } = useGPTStore();
    const { loading, error, data } = useQuery<AllRealtimeQuery>(realtimqQuery);
    const [summaryBoardMutation] = useMutation(SUMMARY_BOARD);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const handleSummaryBoard = async (boardId: string) => {
        try {
          const response = await summaryBoardMutation({
            variables: {
              boardId: boardId
            }
          });
          const responseData = response.data?.summaryBoard?.response;
    
          if (responseData) {
            setAnswer(responseData);
          }
        } catch (error) {
        }
      };

    return (
        <List sx={{
            maxHeight: 500,
            overflow: "auto",
            }} >
            {data?.allRealtime && data?.allRealtime.map((board, index) => (
                board && (
                    <ListItem key={index}>
                        <PostCard
                            onClick={() => handleSummaryBoard(board.Id)} 
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