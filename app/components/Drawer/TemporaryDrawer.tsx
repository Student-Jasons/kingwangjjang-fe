"use client";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

export const TemporaryDrawer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const drawerDirection = isMobile ? "top" : "left";

  return (
    <>
      <Button onClick={() => setOpen(true)} size="large" aria-label="menu">
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        anchor={drawerDirection}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: drawerDirection === "top" ? "auto" : 250,
          }}
        >
          <List>
            <ListItem>
              <Link href={"/dcinside"}>
                <ListItemText primary={"디시인사이드"} />
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"/ygosu"}>
                <ListItemText primary={"와이고수"} />
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"/ppomppu"}>
                <ListItemText primary={"뽐뿌"} />
              </Link>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem className="flex justify-between">
              <LogoutIcon />
              <ListItemText primary={"Log Out"} className="inline" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
