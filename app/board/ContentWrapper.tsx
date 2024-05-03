'use client'
import { Box, Chip, List, ListItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { gql } from "@/gql/gql";
import { BoardContentsByDateDocument, SummaryBoardDocument, BoardContentsByDateQuery } from "@/gql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useRef, useState } from "react";
import { Loading } from "./loading";
import { Error } from "./Error";

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
  const [modifiedData, setModifiedData] = useState<BoardContentsByDateQuery['boardContentsByDate']>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageIndex, setPageIndex] = useState<number>(0);
  const loadingRef = useRef(null);
  const [filterItem, setFilterItem] = useState<string[]>([]);
  const filters = ["dcinside", "ygosu", "ppomppu"];

  const handleFilter = (items: string | null | undefined) => {
    if (!items) return; 

    if (filterItem.includes(items)) {
      setFilterItem(filterItem.filter((item) => item !== items));
    } else {
      setFilterItem([...filterItem, items]);
    }
  };

  
  const { loading: boardContentsQueryLoading, error: boardContentsQueryError, data: boardContentsData, fetchMore} 
  = useQuery (BoardContentsByDateDocument, {variables: { index: "1" },});
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
        return { ...value, site: "와이고수" };
      } else if (value?.site === "dcinside") {
        return { ...value, site: "디시인사이드" };
      } else if (value?.site === "ppomppu") {
        return { ...value, site: "뽐뿌" };
      }
      return value;
    });

    setModifiedData(modifiedData);

    // const tempChipData = modifiedData?.map((value) => { return value?.site });

    // console.log(tempChipData?.filter((element, index) => {
    //   return tempChipData.indexOf(element) === index;
    // }));

  },[boardContentsData])

  if(isMobile) return boardContentsData?.boardContentsByDate && <PostList onClickCard={handleSummaryBoard} postItems={modifiedData} />
  
  return(
    <>
      <Grid container spacing={2} margin={0}
            height={isMobile ? "calc(100vh - 56px)" : "100vh"}
            position="relative" >
        <Grid xs={0} md={3}> 
          <Box position="sticky" top="0" sx={{ width: '100%', bgcolor: 'white'}}> 
          <List>
            <ListItem>
              <Typography variant="body1" color={"gray"} component="div">
                필터
              </Typography>
            </ListItem>
          </List>
          <List>
            <Stack direction="row" spacing={1} paddingX="8px">
              {filters.map((site) => (
                <Chip key={site} label={site} onClick={() => handleFilter(site)} />
              ))}
            </Stack>
          </List>
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <PostList onClickCard={handleSummaryBoard} postItems={modifiedData} />
        </Grid>
        <Grid xs={0} md={3}>
          <Box width="100%" bgcolor="white" position="sticky" top="0" >
            <List>
            <ListItem>
              <Typography variant="body1" color={"gray"} component="div">
                실시간 게시글
              </Typography>
            </ListItem>
            </List>
            <List>
              <ListItem>test1</ListItem>
              <ListItem>test2</ListItem>
              <ListItem>test3</ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      {boardContentsQueryLoading && <Loading />}
      {boardContentsQueryError && <Error message={boardContentsQueryError.message} isMobile={isMobile} />}
    </>
  );
};
