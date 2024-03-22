import React from "react";
import { PostCardType } from "@/types/board-type";
import { List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { PostCard } from "./PostCard";

interface Props {
  PostList: PostCardType[];
}

export const PostList = ({ PostList }: Props) => {
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //   const headerSize = isMobile ? "small" : "large";

  return (
    <List
      sx={{
        width: "100%",
        height: "calc(100vh - 64px)",
        overflow: "auto",
      }}
    >
      {PostList.map((board, index) => (
        <ListItem key={index}>
          <PostCard
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
