"use client";

import { PostCardType } from "@/app/types/board-type";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import LaunchIcon from "@mui/icons-material/Launch";

export const PostCard = ({
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
          <Button onClick={handleToggle}>
            {expanded ? "GPT요약 접기" : "GPT요약 펼치기"}
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div>
              {/* 펼쳐질 내용 */}
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
