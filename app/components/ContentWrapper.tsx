'use client'
import { useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { gql } from "@/gql/gql";
import {  BoardContentsByDateDocument, SummaryBoardMutation, MutationSummaryBoardArgs, SummaryBoardDocument } from "@/gql/graphql";
import { useGPTStore } from "@/stores/board";
import { TypedDocumentNode, useMutation, useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const REALTIME = gql(`
query BoardContentsByDate($index: String!) {
  boardContentsByDate(index: $index) {
    boardId
    site
    rank
    title
    url
    createTime
    GPTAnswer
}
}`);

const SUMMARY_BOARD = gql(`
  mutation SummaryBoard($boardId: String!, $site: String!) {
      summaryBoard(boardId: $boardId, site: $site) {
          boardSummary
      }
  }
`);

export const ContentWrapper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sites = ["dcinside", "ygosu"]; // 새로운 값 생성될 때 추가
  const [pageIndex, setPageIndex] = useState<String>();

  const { loading: boardContentsQueryLoading, error: boardContentsQueryError, data: boardContentsData } 
  = useQuery (BoardContentsByDateDocument, {variables: { index: "0" },});
  const [ summaryBoardMutation, { data: summaryBoardMutationData, loading: summaryBoardMutationLoading, error: summaryBoardMutationError,},]
  = useMutation(SummaryBoardDocument, { refetchQueries: ["BoardContentsByDate"] });
  
  // const filteredPosts = sites.map( (site) =>  boardContentsData?.boardContentsByDate && boardContentsData.boardContentsByDate.filter((post) => post && post.site === site ));
  const handleSummaryBoard = (boardId: string, site: string) => {
    summaryBoardMutation({
      variables: { boardId: boardId, site: site },
      refetchQueries: ['BoardContentsByDate'],
      async onQueryUpdated(observableQuery) {
          await observableQuery.refetch();
      },
    });
  }

  if (boardContentsQueryLoading) return <p>Loading...</p>;
  if (boardContentsQueryError) return <p>Error : {boardContentsQueryError.message}</p>;
  if(isMobile) return boardContentsData?.boardContentsByDate && <PostList onClickCard={handleSummaryBoard} postItems={boardContentsData.boardContentsByDate} />

  return (
    <Grid container spacing={2}>
       {boardContentsData?.boardContentsByDate && <PostList onClickCard={handleSummaryBoard} postItems={boardContentsData.boardContentsByDate} />}
    </Grid>
  );
};
