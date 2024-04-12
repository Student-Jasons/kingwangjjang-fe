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
  const [filterOpen, setFilterOpen] = useState(false);
  const trigger = useScrollTrigger();

  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  return (
    <Box>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar component="nav" color="default"
          sx={{
            borderBottom: "1px solid #e0e0e0",}}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, padding: "8px" }}
            >
              Hello, 
            </Typography>
            <IconButton onClick={handleFilterOpen}>
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

      <Drawer open={filterOpen} onClose={() => setFilterOpen(false)} anchor="right">
        <TemporaryDrawer />
      </Drawer>
    </Box>
  );
};
