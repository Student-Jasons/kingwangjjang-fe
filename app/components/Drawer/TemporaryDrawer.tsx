"use client";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

import LogoutIcon from "@mui/icons-material/Logout";

interface props {
  isMobile: boolean;
}

export const TemporaryDrawer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawerDirection = isMobile ? "top" : "left";

  return (
    <>
      <Box
        sx={{
          width: isMobile ? "auto" : "250px",
          flexGrow: "0",
        }}
      >
        <List>
          <ListItem sx={{ paddingX: "24px" }}>
            <Link href={"/dcinside"}>
              <ListItemText primary={"디시인사이드"} />
            </Link>
          </ListItem>
          <ListItem sx={{ paddingX: "24px" }}>
            <Link href={"/ygosu"}>
              <ListItemText primary={"와이고수"} />
            </Link>
          </ListItem>
          <ListItem sx={{ paddingX: "24px" }}>
            <Link href={"/ppomppu"}>
              <ListItemText primary={"뽐뿌"} />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: "24px",
            }}
          >
            <LogoutIcon />
            <ListItemText primary={"Log Out"} className="inline" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
