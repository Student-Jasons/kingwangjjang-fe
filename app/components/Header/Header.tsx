import { AppBar, Box, Toolbar } from "@mui/material";
import { TemporaryDrawer } from "../Drawer/TemporaryDrawer";

export const Header = () => {
  return (
    <Box sx={{ height: "64px", minHeight: "64px" }}>
      <AppBar
        position="static"
        color="default"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{}}>
          <TemporaryDrawer />
          <div>킹왕짱헤더</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
