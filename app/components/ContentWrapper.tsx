import { Grid } from "@mui/material";
import { SideBar } from "./Side/SideBar";
import { PostList } from "./Post/PostList";
import { boardData } from "../ testdata/bestboard";

export const ContentWrapper = () => {
  return (
    <Grid container sx={{ width: "100%", flexFlow: "row" }}>
      <SideBar />
      <PostList PostList={boardData} />
    </Grid>
  );
};
