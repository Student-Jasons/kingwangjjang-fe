"use client";

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Link,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { TemporaryDrawer } from "@/components/Drawer/TemporaryDrawer";
import React, { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const trigger = useScrollTrigger();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ height: isMobile ? "54px" : "64px" }}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          component="nav"
          color="default"
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Toolbar component="div">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, padding: "8px" }}
            >
              킹왕짱헤더
            </Typography>
            <IconButton onClick={handleOpen}>
              <FilterAltIcon />
            </IconButton>
            <IconButton>
              <Link href="/login">
                <Avatar />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <TemporaryDrawer />
      </Drawer>
    </Box>
  );
};
