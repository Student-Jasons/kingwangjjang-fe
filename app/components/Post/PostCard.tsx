import { PostCardType } from "@/app/types/board-type";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import Chip from "@/components/UI/Chip";
import { theme } from "@/app/styles/theme";
import anime from 'animejs/lib/anime.es.js';

interface Props extends PostCardType {
  onClickToggle: (boardId: string, site: string) => void;
}

export const PostCard = ({ id, site, title, url, createTime, GPTAnswer, rank, onClickToggle, }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null); // Ref for the card element
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      anime({
        targets: cardElement,
        translateX: isHovering ? -50 : 0,
        duration: 300,
        easing: 'easeInOutQuad', 
      });
    }
  }, [isHovering]);

  const handleToggle = (boardId: string, site: string) => {
    setExpanded(!expanded);
    if (!expanded) {
      onClickToggle(boardId, site); 
    }
  };

  const isNotRealtime: boolean = rank !== null;
  return (
    <Card ref={cardRef} className={'mb-3'} sx={{ width: "100%" }} onClick={ () => handleToggle(id, site) } 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
      <CardContent sx={{transform: 'none', display: "flex", flexDirection: "column" }}>
        <Box>
          <Chip label={site} bgcolor={theme.chip.site} />
          {isNotRealtime && <Chip label={rank} bgcolor={theme.chip.rank}/>}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 0px",
          }}
        >
          <Tooltip title={String(createTime)} arrow>
            <Typography variant="body2" component="div">
              {title}
            </Typography>
          </Tooltip>
        </Box>
        <Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ display: "flex", justifyContent: "space-between", 
                    alignItems: "center",padding: "5px 0px",}}>
              <Typography variant="body2" component="div"
                sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word",}}>
                {GPTAnswer}
              </Typography>
              <Link href={url} target="_blank"passHref onClick={(e) => e.stopPropagation()}>
                <LaunchIcon />
              </Link>
            </Box>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};