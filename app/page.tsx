import { PostList } from "./components/Post/PostList";
import { boardData } from "./ testdata/bestboard";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { PostSummarizer } from "./components";

export default function Home() {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Grid container spacing={2} >
        <Grid xs={12}>
            <PostList PostList={boardData} />
        </Grid>
        <Grid xs={12}>
          <PostSummarizer boardUrl="https://m.dcinside.com/board/dcbest/213003"/>
        </Grid>
      </Grid>
    </div>
  );
}
