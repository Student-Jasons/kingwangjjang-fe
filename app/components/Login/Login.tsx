"use client";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    userId: "",
    userPw: "",
  });
  const router = useRouter();
  const { isLogin } = router.query;
  return (
    <Container>
      {isLogin ? (
        <Box>
          <Button>Logout</Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Instagram Login</Typography>
          <TextField
            label="UserId"
            variant="outlined"
            value={user.userId}
            fullWidth
            margin="normal"
            name="userId"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={user.userPw}
            fullWidth
            margin="normal"
            name="password"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      )}
    </Container>
  );
};
