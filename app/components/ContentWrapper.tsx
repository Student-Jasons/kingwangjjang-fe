'use client'
import { useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { gql } from "@/gql/gql";
import {  BoardContentsByDateDocument, SummaryBoardMutation, MutationSummaryBoardArgs, SummaryBoardDocument, BoardContentsByDateQuery } from "@/gql/graphql";
import { useGPTStore } from "@/stores/board";
import { TypedDocumentNode, useMutation, useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { SetStateAction, useEffect, useRef, useState } from "react";

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
  const [modifiedData, setModifiedData] = useState<BoardContentsByDateQuery>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageIndex, setPageIndex] = useState<number>(0);
  const loadingRef = useRef(null);
  
  const { loading: boardContentsQueryLoading, error: boardContentsQueryError, data: boardContentsData, fetchMore} 
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

  useEffect(() => {
    console.log('pageIndex', pageIndex)
    if (pageIndex > 0) {
      fetchMore({
        variables: {
          index: (pageIndex).toString()
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult; // Return previous result if no new data
          return {
            boardContentsByDate: [
              ...(previousResult.boardContentsByDate || []),
              ...(fetchMoreResult.boardContentsByDate || [])
            ]
          };
        },
      })
    }
  }, [pageIndex])

  useEffect(() => {
    let observerRefValue: any = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !boardContentsQueryLoading && !boardContentsQueryError) {
          setPageIndex(prevPageIndex => prevPageIndex + 1); 
          console.log(pageIndex)
        }
      },
      { threshold: 0.5 }
    );

    
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
      observerRefValue = loadingRef.current;
    }

    return () => {
        if (observerRefValue) {
          observer.unobserve(observerRefValue);
        }
    };
  }, [boardContentsQueryError, boardContentsQueryLoading]);

      
  useEffect(()=>{
    const modifiedData = (boardContentsData?.boardContentsByDate)?.map((value) => {
      if (value?.site === "ygosu") {
        return { ...value, site: "YG" };
      } else if (value?.site === "dcinside") {
        return { ...value, site: "DC" };
      }
      return value;
    });
    console.log(modifiedData)
    setModifiedData(modifiedData as SetStateAction<BoardContentsByDateQuery | undefined>);
  },[boardContentsData])

  if (boardContentsQueryLoading) return <p>Loading...</p>;
  if (boardContentsQueryError) return <p>Error : {boardContentsQueryError.message}</p>;
  if(isMobile) return boardContentsData?.boardContentsByDate && <PostList onClickCard={handleSummaryBoard} postItems={boardContentsData.boardContentsByDate} />
  
  return(
    <div>
      {boardContentsData?.boardContentsByDate && (
        <>
          <PostList onClickCard={handleSummaryBoard} postItems={modifiedData} />
          <div ref={loadingRef}></div> {/* Intersection Observer 대상으로 사용될 빈 div */}
        </>
      )}
    </div>
  );
};
