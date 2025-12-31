import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const SellerLogin = () => {
  const gradient = "linear-gradient(90deg,#ff6f61,#ffa726)";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: 420, boxShadow: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 1, textAlign: "center" }}
          >
            Seller Login
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "#777", mb: 3 }}
          >
            Login to manage your store
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: 600,
              color: "#fff",
              background: gradient,
              "&:hover": { background: gradient },
            }}
          >
            Login
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography sx={{ textAlign: "center", fontSize: 14 }}>
            New Seller?{" "}
            <Typography
              component={Link}
              to="/seller/register"
              sx={{
                color: "#ff6f61",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Register Here
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SellerLogin;
