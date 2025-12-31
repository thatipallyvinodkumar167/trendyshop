import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f8f8f8",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
        >
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              background: "linear-gradient(90deg,#ff6f61,#ffa726)",
              "&:hover": {
                background: "linear-gradient(90deg,#ffa726,#ff6f61)",
              },
              py: 1.5,
              fontSize: 16,
            }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 1 }}
          >
            <Link href="#" underline="hover">
              Forgot Password?
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
