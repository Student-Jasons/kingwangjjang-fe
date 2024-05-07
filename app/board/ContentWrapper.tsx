'use client'
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { BoardContentsByDateDocument, SummaryBoardDocument, BoardContentsByDateQuery } from "@/gql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { RealtimePost } from "@/components/Post/RealtimePost";
import { Filter } from "./Filter";
import { FilterCollectionType } from "@/types/board-type";

export const ContentWrapper = () => {
  const theme = useTheme();
  const [modifiedData, setModifiedData] = useState<BoardContentsByDateQuery['boardContentsByDate']>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageIndex, setPageIndex] = useState<number>(0);
  const loadingRef = useRef(null);
  const [filterCollection, setFilterCollection] = useState<FilterCollectionType>();

  const handleFilter = (items: FilterCollectionType) => {
  };

  
  const { loading: boardContentsQueryLoading, error: boardContentsQueryError, data: boardContentsData, fetchMore} 
  = useQuery (BoardContentsByDateDocument, {variables: { index: "0" },});
  const [ summaryBoardMutation, { data: summaryBoardMutationData, loading: summaryBoardMutationLoading, error: summaryBoardMutationError,},]
  = useMutation(SummaryBoardDocument, { refetchQueries: ["BoardContentsByDate"] });
  
  const handleSummaryBoard = (boardId: string, site: string) => {
    // summaryBoardMutation({
    //   variables: { boardId: boardId, site: site },
    //   refetchQueries: ['BoardContentsByDate'],
    //   async onQueryUpdated(observableQuery) {
    //       await observableQuery.refetch();
    //   },
    // });
  }

  useEffect(() => {
    console.log('pageIndex', pageIndex)
    if (pageIndex > 0) {
      fetchMore({
        variables: {
          index: (pageIndex).toString()
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult; 
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
        return { ...value, site: "와이고수" };
      } else if (value?.site === "dcinside") {
        return { ...value, site: "디시인사이드" };
      } else if (value?.site === "ppomppu") {
        return { ...value, site: "뽐뿌" };
      }
      return value;
    });

    setModifiedData(modifiedData);
    
    const uniqueSite = Array.from(new Set(modifiedData && modifiedData.map((item) => item?.site).filter(site => typeof site === 'string'))); 
    setFilterCollection({ site: uniqueSite });
  },[boardContentsData])

  if(isMobile) return boardContentsData?.boardContentsByDate && <PostList onClickCard={handleSummaryBoard} postItems={modifiedData} />
  
  return(
    <>
      <Grid container spacing={2} margin={0}
            height={isMobile ? "calc(100vh - 56px)" : "100vh"}
            position="relative" >
        <Grid xs={0} md={3}> 
          {/* 왼쪽 Side */}
          <Box width="100%" bgcolor="white" position="sticky" top="0" >
          <Filter filteredData={filterCollection} setFilterCollection={setFilterCollection} />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <PostList onClickCard={handleSummaryBoard} postItems={modifiedData} />
          {boardContentsQueryLoading && <Loading />}
          {boardContentsQueryError && <Error message={boardContentsQueryError.message} isMobile={isMobile} />}
        </Grid>
        <Grid xs={0} md={3}>
          <Box width="100%" bgcolor="white" position="sticky" top="0" >
            {/* 오른쪽 Side */}
            <RealtimePost/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
