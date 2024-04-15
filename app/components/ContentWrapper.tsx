'use client'
import { useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { gql } from "@/gql/gql";
import {  AllRealtimeQuery, SummaryBoardMutation } from "@/gql/graphql";
import { useGPTStore } from "@/stores/board";
import { useMutation, useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const REALTIME = gql(`
query AllRealtime {
  allRealtime {
    id
    boardId
    site
    title
    url
    createTime
    GPTAnswer
  }
}`);

const SUMMARY_BOARD = gql(`
  mutation SummaryBoard($boardId: String!, $site: String!) {
      summaryBoard(boardId: $boardId, site:$site) {
          boardSummary
      }
  }
`);

export const ContentWrapper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sites = ["dcinside", "ygosu"]; // 새로운 값 생성될 때 추가
  const { setAnswer, reset } = useGPTStore();
  const { loading: realtimeQueryLoading, error: realtimeQueryError, data: realtimeQueryData } = useQuery<AllRealtimeQuery>(REALTIME);
  const [ summaryBoardMutation, { data: summaryBoardMutationData, loading: summaryBoardMutationLoading, error: summaryBoardMutationError,},] = useMutation<SummaryBoardMutation>(SUMMARY_BOARD, { refetchQueries: ["AllRealtime"] });
  const filteredPosts = sites.map( (site) =>  realtimeQueryData?.allRealtime && realtimeQueryData?.allRealtime.filter((post) => post && post.site === site ));
  
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
  if(isMobile) return realtimeQueryData?.allRealtime && <PostList onClickCard={handleSummaryBoard} postItems={realtimeQueryData.allRealtime} />

  return (
    <Grid container spacing={2}>
        {
          filteredPosts.map((posts, index) => (
            realtimeQueryData ? (
              <Grid xs={12} md={6} key={index}>
                <PostList onClickCard={handleSummaryBoard} postItems={posts} />
              </Grid>
            ) : null
          ))
        }
    </Grid>
  );
};
