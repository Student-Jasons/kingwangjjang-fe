"use client";

import { PostCardType } from "@/types/board-type";
import { List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { PostCard } from "./PostCard";

interface Props {
  postItems: PostCardType[];
}

export const PostList = ({ postItems }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const listSx = {
    width: isMobile ? "auto" : "calc(100vh - 250px)",
    overflow: "auto",
    flexGrow: "2",
  };

  return (
    <List sx={listSx}>
      {postItems.map((post, index) => (
        <ListItem key={index}>
          <PostCard
            id={post.id}
            site={post.site}
            title={post.title}
            url={post.url}
            createTime={post.createTime}
            GPTAnswer={post.GPTAnswer}
          ></PostCard>
        </ListItem>
      ))}
    </List>
  );
};
