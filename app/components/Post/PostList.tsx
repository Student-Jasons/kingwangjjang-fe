import { List, ListItem  } from "@mui/material";
import { PostCard } from "./PostCard";
import { AllRealtimeQuery } from "@/app/__generated__/graphql";

interface Props {
  postItems: AllRealtimeQuery['allRealtime'];
  onClickCard: (boardId: string) => void;
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
