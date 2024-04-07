"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { boardData } from "@/app/ testdata/bestboard";
import { gql } from "@/gql/gql";
import { AllRealtimeQuery, SummaryBoardMutation } from "@/gql/graphql";
import { useGPTStore } from "@/stores/board";
import { useMutation, useQuery } from "@apollo/client";

const REALTIME = gql(`
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

export const ContentWrapper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sites = ["dcinside", "ygosu", "ppomppu"];
  const { setAnswer, reset } = useGPTStore();
  const { loading: realtimeQueryLoading, error: realtimeQueryError, data: realtimeQueryData } = useQuery<AllRealtimeQuery>(REALTIME);
  const [ summaryBoardMutation, { data: summaryBoardMutationData, loading: summaryBoardMutationLoading, error: summaryBoardMutationError,},] = useMutation<SummaryBoardMutation>(SUMMARY_BOARD, { refetchQueries: ["AllRealtime"] });
  const filteredPosts = sites.map((site) =>  realtimeQueryData?.allRealtime && realtimeQueryData?.allRealtime.filter((post) => {
    return post && post.site === site
  }));
  
  const handleSummaryBoard = (boardId: string) => {
    reset();
    summaryBoardMutation({
      variables: { boardId: boardId },
      refetchQueries: ['AllRealtime'],
      async onQueryUpdated(observableQuery) {
          await observableQuery.refetch();
          setAnswer(observableQuery.getCurrentResult().data.allRealtime.find((board: any) => board.Id === boardId).GPTAnswer)
      },
    });
  }

  if (realtimeQueryLoading) return <p>Loading...</p>;
  if (realtimeQueryError) return <p>Error : {realtimeQueryError.message}</p>;


  return (
    <Grid container sx={{ width: "100%", flexFlow: "row" }}>
      { isMobile ? (
          realtimeQueryData?.allRealtime && <PostList onClickCard={handleSummaryBoard} postItems={realtimeQueryData.allRealtime} />
      ) : (
        filteredPosts.map((posts, index) => (
          realtimeQueryData && <PostList onClickCard={handleSummaryBoard} key={index} postItems={posts} />
        ))
      )}
    </Grid>
  );
};
