"use client";

import { PostCardType } from "@/app/types/board-type";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Icon,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LaunchIcon from "@mui/icons-material/Launch";

export const PostCard = ({
  id,
  title,
  url,
  createTime,
  GPTAnswer,
}: PostCardType) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 8px",
          }}
        >
          <Tooltip title={String(createTime)} arrow>
            <Typography variant="body2" component="div">
              {title}
            </Typography>
          </Tooltip>
          <Link href={url} target="_blank">
            <LaunchIcon />
          </Link>
        </Box>
        <Box>
          <IconButton onClick={handleToggle}>
            <ArrowForwardIosIcon
              sx={{ transform: expanded ? "routed(90deg)" : "routed(0deg)" }}
            />
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div>
              <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
              >
                {GPTAnswer}
              </Typography>
            </div>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};
