import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Button,
  Badge,
} from "@mui/material";
import { ShoppingCart, Search, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Men", path: "/products/men" },
    { label: "Women", path: "/products/women" },
    { label: "Kids", path: "/products/kids" },
    { label: "Fashion", path: "/products/fashion" },
    { label: "Jewelry", path: "/products/jewelry" },
  ];

  const gradient = "linear-gradient(90deg,#ff6f61,#ffa726)";

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 1,
          bgcolor: "#0b0607",
          color: "#ffffff",
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          {[
            { label: "7 Days Easy Returns", url: "/returns" },
            { label: "Best Prices", url: "/best-prices" },
          ].map((item, index) => (
            <Typography
              key={index}
              component={Link}
              to={item.url}
              sx={{
                fontSize: 14,
                cursor: "pointer",
                px: 1,
                borderRadius: 1,
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s",
                "&:hover": {
                  background: gradient,
                  transform: "scale(1.05)",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          {[
            { label: "Help Center", url: "/help" },
            { label: "Sell On Vogstya", url: "/seller/login" },
          ].map((item, index) => (
            <Typography
              key={index}
              component={Link}
              to={item.url}
              sx={{
                fontSize: 14,
                cursor: "pointer",
                px: 1,
                borderRadius: 1,
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s",
                "&:hover": {
                  background: gradient,
                  transform: "scale(1.05)",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Box>
      {/* ✅ TOP BAR BOX CLOSED HERE */}

      {/* Main Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: "#0b0607" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 3,
            py: 1.5,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src="https://vogstya.com/storage/logo/yiHKYfO7Fx5S0Dr29gAkFi3j4smeCVjMLJLmNowD.png"
              alt="logo"
              sx={{ width: 50, height: 50, filter: "brightness(0) invert(1)" }}
            />
            <Typography
              component={Link}
              to="/"
              sx={{
                fontWeight: 800,
                fontSize: 26,
                textDecoration: "none",
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Vogstya
            </Typography>
          </Box>

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 420,
              bgcolor: "#fff",
              borderRadius: 30,
              px: 2,
            }}
          >
            <InputBase
              placeholder="Search for Brands & Products"
              sx={{ flex: 1, color: "#000" }}
            />
            <IconButton sx={{ background: gradient }}>
              <Search sx={{ color: "#fff" }} />
            </IconButton>
          </Box>

          {/* Login, Cart, Wishlist */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/login"
              sx={{ color: "#fff", "&:hover": { background: gradient } }}
            >
              LOGIN
            </Button>

            <IconButton
              component={Link}
              to="/cart"
              sx={{ color: "#fff", "&:hover": { background: gradient } }}
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton
              component={Link}
              to="/wishlist"
              sx={{ color: "#fff", "&:hover": { background: gradient } }}
            >
              <Badge badgeContent={wishlistCount} color="secondary">
                <Favorite />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>

        {/* Menu Bar */}
        <Toolbar sx={{ bgcolor: "#111" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: 4,
            }}
          >
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  cursor: "pointer",
                  px: 1,
                  borderRadius: 1,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  "&:hover": {
                    background: gradient,
                    transform: "scale(1.05)",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
