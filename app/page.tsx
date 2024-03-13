import { PostList } from "./components/Post/PostList";
import { boardData } from "./ testdata/bestboard";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { PostSummarizer } from "./components";
import { Container } from "@mui/material";

export default function Home() {
  
  return (
    <Container className="flex max-w-lg items-center h-screen" maxWidth="lg">
        <Grid container className='flex items-center' spacing={2} >
          <Grid xs={12}>
              <PostList PostList={boardData} />
          </Grid>
          <Grid xs={12}>
            <PostSummarizer GPTAnswer="test"/>
          </Grid>
        </Grid>
    </Container>
  );
}
