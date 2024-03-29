'use client'
import { PostList } from "@/components/Post/PostList";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { PostSummarizer } from "@/components/PostSummarizer";
import { Container } from "@mui/material";
import { useGPTStore } from "@/stores/board";
import { gql, useQuery } from '@apollo/client';
import { boardData } from "../ testdata/bestboard";
const BEST_BOARD = gql`
  query MyQuery {
    allRealtime {
      Id
      GPTAnswer
    }
  }
`;

export default function Home() {
  const { answer, setAnswerById } = useGPTStore();
  const { loading, error, data } = useQuery(BEST_BOARD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  const handlePostCardClick = (id: String) => {
    setAnswerById(id, boardData);
  };
  
  return (
      <Container className="flex max-w-lg items-center h-screen" maxWidth="lg">
        <Grid container className='flex items-center' spacing={2} >
          <Grid xs={12}>
            <PostList PostList={boardData} handlePostCardClick={handlePostCardClick} />
          </Grid>
          <Grid xs={12}>
            <PostSummarizer GPTAnswer={answer}/>
          </Grid>
        </Grid>
      </Container>
  );
}
