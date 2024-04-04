"use client";

import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

export const TemporaryDrawer = () => {
  const [filterItem, setFilterItem] = useState<string[]>([]);

  const handleFilter = (items: string) => {
    if (filterItem.includes(items)) {
      setFilterItem(filterItem.filter((item) => item !== items));
    } else {
      setFilterItem([...filterItem, items]);
    }
    console.log(filterItem);
  };

  return (
    <Box sx={{ width: "300px" }}>
      <List>
        <ListItem>
          <Typography variant="h6" component="div">
            필터
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Chip label="dcinside" onClick={() => handleFilter("dcinside")} />
        <Chip label="ygosu" onClick={() => handleFilter("ygosu")} />
        <Chip label="ppomppu" onClick={() => handleFilter("ppomppu")} />
      </List>
      <Divider />
    </Box>
  );
};
