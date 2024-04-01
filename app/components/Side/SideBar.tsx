"use client";

import { useState } from "react";
// import { useIsMobile } from "@/app/hooks/useIsMobile";
import { TemporaryDrawer } from "../Drawer/TemporaryDrawer";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";

export const SideBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerDirection = isMobile ? "top" : "left";

  return (
    <>
      {!isMobile && (
        <Drawer
          variant="permanent"
          open={true}
          anchor={drawerDirection}
          sx={{
            backgroundColor: "transparent",
            width: isMobile ? "auto" : "250px",
          }}
          PaperProps={{
            sx: {
              position: isMobile ? "fixed" : "relative",
              zIndex: isMobile ? "1200" : "0",
            },
          }}
        >
          <TemporaryDrawer />
        </Drawer>
      )}
    </>
  );
};
