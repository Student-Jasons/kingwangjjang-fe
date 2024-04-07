import { List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { PostCard } from "./PostCard";
import { AllRealtimeQuery } from "@/app/__generated__/graphql";

interface Props {
  postItems: AllRealtimeQuery['allRealtime'];
  onClickCard: (boardId: string) => void;
}

export const PostList = ({ postItems, onClickCard }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const listSx = {
    width: isMobile ? "auto" : "calc(100vh - 250px)",
    overflow: "auto",
    flexGrow: "2",
  };

  return (
    <List sx={listSx}>
      { postItems && postItems.map((post, index) => (
        post &&
        <ListItem key={index}>
          <PostCard
            onClickToggle={onClickCard}
            id={post.Id}
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
