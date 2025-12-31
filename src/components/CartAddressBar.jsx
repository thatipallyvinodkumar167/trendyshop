import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function CartAddressBar({ onAddressChange }) {
  const [open, setOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("Hyderabad - 500073");
  const [loading, setLoading] = useState(false);

  // ✅ REALTIME PINCODE LOOKUP
  const handleUsePincode = async () => {
    if (!/^\d{6}$/.test(pincode)) {
      alert("Enter a valid 6-digit pincode");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await res.json();

      if (
        data[0].Status === "Success" &&
        data[0].PostOffice.length > 0
      ) {
        const po = data[0].PostOffice[0];

        const addr = `${po.Name}, ${po.District}, ${po.State} - ${pincode}`;

        setAddress(addr);
        if (typeof onAddressChange === "function") {
          onAddressChange(addr);
        }
        setOpen(false);
      } else {
        alert("Invalid pincode");
      }
    } catch (error) {
      alert("Failed to fetch pincode details");
    } finally {
      setLoading(false);
    }
  };

  // ✅ CURRENT LOCATION (STATIC SAMPLE)
  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(() => {
      const addr = "Hyderabad - 500073";
      setAddress(addr);
      if (typeof onAddressChange === "function") {
        onAddressChange(addr);
      }
      setOpen(false);
    });
  };

  return (
    <>
      {/* ADDRESS BAR */}
      <Box
        sx={{
          bgcolor: "#fff",
          p: 2,
          borderRadius: 1,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Typography fontSize={14}>
          Deliver to: <b>{address}</b>
        </Typography>

        <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
          Change
        </Button>
      </Box>

      {/* DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Select Delivery Address</DialogTitle>

        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Enter Pincode"
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value.replace(/\D/g, ""))
              }
              inputProps={{ maxLength: 6 }}
              fullWidth
            />

            <Button
              variant="contained"
              onClick={handleUsePincode}
              disabled={loading}
              sx={{
                background: "linear-gradient(90deg,#ff6f61,#ffa726)",
              }}
            >
              {loading ? "Checking..." : "Use This Pincode"}
            </Button>

            <Button
              variant="outlined"
              startIcon={<LocationOnIcon />}
              onClick={handleUseLocation}
            >
              Use Current Location
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
