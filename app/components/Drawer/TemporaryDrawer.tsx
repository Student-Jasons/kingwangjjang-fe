import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const TemporaryDrawer = () => {
  const [filterItem, setFilterItem] = useState<string[]>([]);

  const handleFilter = (items: string) => {
    if (filterItem.includes(items)) {
      setFilterItem(filterItem.filter((item) => item !== items));
    } else {
      setFilterItem([...filterItem, items]);
    }
  };

  const filters = ["dcinside", "ygosu", "ppomppu"];

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
        <Stack direction="row" spacing={1}>
          {filters.map((filter, index) => (
            <Chip key={index} label={filter} onClick={() => handleFilter(filter)} />
          ))}
        </Stack>
      </List>
      <Divider />
    </Box>
  );
};
