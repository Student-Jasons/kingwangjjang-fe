"use client";

import { PostCardType } from "@/types/board-type";
import { List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { PostCard } from "./PostCard";

interface Props {
  PostList: PostCardType[];
}

export const PostList = ({ PostList }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <List
      sx={{
        width: isMobile ? "auto" : "calc(100vh - 250px)",
        height: "calc(100vh - 64px)",
        overflow: "auto",
        flexGrow: "2",
      }}
    >
      {PostList.map((board, index) => (
        <ListItem key={index}>
          <PostCard
            id={board.id}
            site={board.site}
            title={board.title}
            url={board.url}
            createTime={board.createTime}
            GPTAnswer={board.GPTAnswer}
          ></PostCard>
        </ListItem>
      ))}
    </List>
  );
};
