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
import Label from "@/app/components/UI/Label";
import { theme } from "@/app/styles/theme";
import anime from 'animejs/lib/anime.es.js';

interface Props extends PostCardType {
  onClickToggle: (boardId: string, site: string) => void;
}

export const PostCard = ({ id, site, title, url, createTime, GPTAnswer, rank, onClickToggle, }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null); 
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
    <Box position="relative" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Card ref={cardRef} className={'mb-3'} sx={{ width: "100%", zIndex:"100", position:"relative" }} onClick={ () => handleToggle(id, site) }>
        <CardContent sx={{transform: 'none', display: "flex", flexDirection: "column" }}>
          <Box>
            <Label label={site} bgcolor={theme.chip.site} />
            {isNotRealtime && <Label label={rank} bgcolor={theme.chip.rank}/>}
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", padding: "5px 0px",}}>
            <Tooltip title={String(createTime)} arrow>
              <Typography variant="body2" component="div">
                {title}
              </Typography>
            </Tooltip>
          </Box>
          <Box>
            <Collapse in={expanded} timeout="auto" > {/*unmountOnExit*/}
              <Box sx={{ display: "flex", justifyContent: "space-between", 
                      alignItems: "center",padding: "5px 0px",}}>
                <Typography variant="body2" component="div"
                  sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word",}}>
                  {GPTAnswer}
                </Typography>
              </Box>
            </Collapse>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{position:"absolute", top:"0", borderRadius:"5px", left:"0", bgcolor:"#3b82f6",width: "100%", height:"100%", boxShadow:"none"}}>
        <Link href={url} target="_blank" passHref onClick={(e) => e.stopPropagation()}>
          <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="end">
            <LaunchIcon sx={{width:"50px"}}/>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};