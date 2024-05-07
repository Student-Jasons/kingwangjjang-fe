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
import { AccountMenu } from "./MyPage/AccountMenu";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [filterOpen, setFilterOpen] = useState(false);
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box height={isMobile ? "57px" : "65px"} marginBottom={isMobile ? "8px" : "0"}>
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
            {isMobile ? (
              <IconButton onClick={handleFilterOpen}>
                <FilterAltIcon />
              </IconButton>
            ) : null}
            <IconButton
                onClick={handleMenuClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              > 
              <Avatar />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Filter Drawer */}
      {isMobile ? 
      <Drawer open={filterOpen} onClose={() => setFilterOpen(false)} anchor="right">
        <TemporaryDrawer />
      </Drawer>
      : null}

      {/* Avata Menu */}
      <AccountMenu anchorEl={anchorEl} open={open} handleClose={handleMenuClose} />
    </Box>
  );
};
