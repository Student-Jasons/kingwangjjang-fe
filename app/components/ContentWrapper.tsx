"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { PostList } from "@/components/Post/PostList";
import { boardData } from "@/app/ testdata/bestboard";

export const ContentWrapper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sites = ["dcinside", "ygosu", "ppomppu"];

  const filteredPosts = sites.map((site) =>
    boardData.filter((post) => post.site === site)
  );

  return (
    <Grid container sx={{ width: "100%", flexFlow: "row" }}>
      <>
        {isMobile ? (
          <PostList postItems={boardData} />
        ) : (
          filteredPosts.map((posts, index) => <PostList postItems={posts} />)
        )}
      </>
    </Grid>
  );
};
