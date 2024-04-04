import React, { useCallback, useEffect, useState } from 'react'
import { PostCard } from './PostCard';
import { List, ListItem } from '@mui/material';
import { AllRealtimeQuery, SummaryBoardMutation } from '@/gql/graphql';
import { ObservableQuery, OperationVariables, useMutation, useQuery } from '@apollo/client';
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
      boardSummary
    }
  }
`);

export const PostList = () => {
    const { setAnswer, reset } = useGPTStore();
    const { loading: realtimeQueryLoading, error: realtimeQueryError, data: realtimeQueryData } = useQuery<AllRealtimeQuery>(realtimqQuery);
    const [summaryBoardMutation, { data: summaryBoardMutationData, loading: summaryBoardMutationLoading, error: summaryBoardMutationError }] = useMutation<SummaryBoardMutation>(SUMMARY_BOARD, {
      refetchQueries: [
        'AllRealtime'
      ]
    });

    if (realtimeQueryLoading) return <p>Loading...</p>;
    if (realtimeQueryError) return <p>Error : {realtimeQueryError.message}</p>;

    const handleSummaryBoard = (boardId: string) => {
      reset();
      summaryBoardMutation({
        variables: { boardId: boardId },
        refetchQueries: ['AllRealtime'],
        async onQueryUpdated(observableQuery) {
            await observableQuery.refetch();
            setAnswer( observableQuery.getCurrentResult().data.allRealtime.find((board: any) => board.Id === boardId).GPTAnswer)
        },
      });
    }

    return (
        <List sx={{
            maxHeight: 500,
            overflow: "auto",
            }} >
            {realtimeQueryData?.allRealtime && realtimeQueryData?.allRealtime.map((board, index) => (
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