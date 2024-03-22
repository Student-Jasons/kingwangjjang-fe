import { PostList } from "./components/Post/PostList";
import { boardData } from "./ testdata/bestboard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Header } from "./components/Header/Header";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Header></Header>
      <Grid container sx={{ width: "100%" }}>
        <PostList PostList={boardData} />
      </Grid>
    </Container>
  );
}
