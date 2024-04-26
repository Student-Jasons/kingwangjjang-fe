import { List, ListItem  } from "@mui/material";
import { PostCard } from "./PostCard";
import { BoardSummaryType } from "@/app/__generated__/graphql";

interface Props {
  postItems: BoardSummaryType[];
  onClickCard: (boardId: string, stie: string) => void;
}

export const PostList = ({ postItems, onClickCard }: Props) => {
  return (
      <List sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        height: 500
      }}>
        { postItems && postItems.map((post, index) => (
          post &&
          <ListItem key={index}>
            <PostCard
              onClickToggle={onClickCard}
              id={post.boardId as string}
              site={post.site as string}
              title={post.title as string}
              url={post.url as string}
              createTime={post.createTime}
              GPTAnswer={post.GPTAnswer as string}
            ></PostCard>
          </ListItem>
        ))}
      </List>
  );
};
