import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Avatar,
  MenuItem,
} from "@mui/material";

const steps = ["User information", "Shop information"];

const SellerRegister = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [profilePreview, setProfilePreview] = useState("");
  const [profileFile, setProfileFile] = useState(null);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // ✅ FIXED IMAGE UPLOAD HANDLER
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file");
      return;
    }

    setProfileFile(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
      {/* Header */}
      <Typography variant="h4" fontWeight={700} mb={3}>
        Register as a seller
      </Typography>

      {/* Stepper */}
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* ================= STEP 1 ================= */}
      {activeStep === 0 && (
        <Card sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            User Information
          </Typography>

          <Grid container spacing={3}>
            {/* Profile Upload */}
            <Grid item xs={12} md={8}>
              <Typography fontWeight={600} mb={1}>
                User profile (Ratio 1:1) *
              </Typography>

              <TextField
                type="file"
                fullWidth
                inputProps={{ accept: "image/*" }}
                onChange={handleImageUpload}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Image Preview */}
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <Avatar
                variant="rounded"
                src={profilePreview || ""}
                sx={{
                  width: 160,
                  height: 160,
                  bgcolor: "#e0e0e0",
                  border: "1px dashed #bbb",
                  fontSize: 18,
                }}
              >
                {!profilePreview && "500 × 500"}
              </Avatar>
            </Grid>

            {/* Name */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name *"
                placeholder="Enter Name"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                placeholder="Enter Name"
              />
            </Grid>

            {/* Phone & Gender */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number *"
                placeholder="Enter phone number"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth select label="Gender">
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          {/* Account Info */}
          <Typography variant="h5" fontWeight={600} mt={5} mb={3}>
            Account Information
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address *"
                placeholder="Enter Email Address"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Password *" type="password" />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Confirm Password *"
                type="password"
              />
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleNext}>
              Continue
            </Button>
          </Box>
        </Card>
      )}

      {/* ================= STEP 2 ================= */}
      {activeStep === 1 && (
        <Card sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Shop Information
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label="Shop Name *" />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth select label="Business Type">
                <MenuItem value="individual">Individual</MenuItem>
                <MenuItem value="company">Company</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label="GST Number" />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label="Address Line 1 *" />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField fullWidth label="City *" />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField fullWidth label="State *" />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Pincode *" />
            </Grid>
          </Grid>

          <Box mt={4} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={handleBack}>
              Back
            </Button>

            <Button variant="contained" color="success">
              Submit
            </Button>
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default SellerRegister;
