"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TemporaryDrawer } from "../Drawer/TemporaryDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerDirection = isMobile ? "top" : "left";

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <AppBar
        position="static"
        color="default"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          {isMobile && (
            <Box>
              <Button onClick={handleOpen} size="large" aria-label="menu">
                <MenuIcon />
              </Button>

              <Drawer
                open={open}
                anchor={drawerDirection}
                onClose={() => setOpen(false)}
              >
                <TemporaryDrawer />
              </Drawer>
            </Box>
          )}
          <div>킹왕짱헤더</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
