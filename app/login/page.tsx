"use client";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    userId: "",
    userPw: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
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
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={user.userPw}
          fullWidth
          margin="normal"
          name="password"
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            color: "primary.main",

            "&:hover": {
              color: "#fff",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}
