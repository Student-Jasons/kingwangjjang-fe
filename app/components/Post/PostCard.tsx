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
    <Card sx={{ width: "100%" }} onClick={handleToggle}>
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
        </Box>
        <Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 8px",
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {GPTAnswer}
              </Typography>
              <Link
                href={url}
                target="_blank"
                passHref
                onClick={(e) => e.stopPropagation()}
              >
                <LaunchIcon />
              </Link>
            </Box>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};
