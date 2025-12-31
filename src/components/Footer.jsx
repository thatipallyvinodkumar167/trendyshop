import React from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

function Footer() {
  const quickLinks = ["Home", "Men", "Women", "Kids", "Fashion"];
  const companyLinks = ["About Us", "Careers", "Privacy Policy", "Terms & Conditions"];

  const gradient = "linear-gradient(90deg,#ff6f61,#ffa726)";

  return (
    <Box sx={{ bgcolor: "#0b0607", color: "#fff", mt: 5, px: { xs: 3, md: 10 }, py: 5 }}>
      {/* Newsletter */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
          Subscribe to our Newsletter
        </Typography>
        <Box sx={{ display: "flex", gap: 2, width: { xs: "100%", md: "auto" } }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              width: { xs: "100%", md: 300 },
              input: { color: "#000" },
            }}
          />
          <Button
            sx={{
              bgcolor: gradient,
              color: "#fff",
              "&:hover": { bgcolor: gradient },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Footer Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 5,
          mb: 5,
        }}
      >
        {/* Quick Links */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Quick Links</Typography>
          {quickLinks.map((link, index) => (
            <Typography
              key={index}
              sx={{
                cursor: "pointer",
                mb: 1,
                transition: "all 0.3s",
                "&:hover": { color: "#ffa726" },
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>

        {/* Company Links */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Company</Typography>
          {companyLinks.map((link, index) => (
            <Typography
              key={index}
              sx={{
                cursor: "pointer",
                mb: 1,
                transition: "all 0.3s",
                "&:hover": { color: "#ffa726" },
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>

        {/* Contact */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Contact Us</Typography>
          <Typography sx={{ mb: 1 }}>Email: support@vogstya.com</Typography>
          <Typography sx={{ mb: 1 }}>Phone: +91 1234567890</Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, index) => (
              <IconButton
                key={index}
                sx={{
                  color: "#fff",
                  bgcolor: "#111",
                  "&:hover": { bgcolor: gradient },
                  p: 1.5,
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box sx={{ borderTop: "1px solid #333", pt: 3, textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>
          © {new Date().getFullYear()} Vogstya. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
