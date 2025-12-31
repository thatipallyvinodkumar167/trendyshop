import React, { useContext, useState } from "react"; // ✅ useState added
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { CartContext } from "../context/CartContext";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CartAddressBar from "../components/CartAddressBar"; // ✅ address component

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ Address state (required)
  const [address, setAddress] = useState("");

  // Calculate prices
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = totalPrice * 0.2;
  const protectFee = 136;
  const finalAmount = totalPrice - discount + protectFee;
  const savings = discount;

  // Empty Cart UI
  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          style={{ width: 150, opacity: 0.6 }}
        />
        <Typography variant="h5" fontWeight={600}>
          Your cart is empty
        </Typography>
        <Typography sx={{ textAlign: "center", maxWidth: 300 }}>
          Looks like you haven’t added anything to your cart yet.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg,#ff6f61,#ffa726)",
            px: 4,
            py: 1.5,
          }}
          onClick={() => navigate("/")}
        >
          Shop Now
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, bgcolor: "#f8f8f8", minHeight: "100vh" }}>
      
 

      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        Your Cart
      </Typography>
           {/* ✅ Address Bar (ONLY NEW ADDITION) */}
      <CartAddressBar onAddressSelect={setAddress} />

      <Grid container spacing={3}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                mb: 3,
                p: 3,
                alignItems: "center",
                width: "100%",
                minHeight: 180,
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                image={item.image || "https://via.placeholder.com/180"}
                alt={item.title}
                sx={{
                  width: 350,
                  height: 180,
                  objectFit: "contain",
                  mr: 3,
                }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography fontWeight={700} sx={{ fontSize: 18 }}>
                  {item.title}
                </Typography>

                <Typography
                  sx={{ color: "#ff6f61", fontWeight: 700, fontSize: 16, mt: 1 }}
                >
                  ₹ {item.price}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    <Remove />
                  </IconButton>

                  <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>

                  <IconButton
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Add />
                  </IconButton>

                  <IconButton
                    onClick={() => removeFromCart(item.id)}
                    sx={{ ml: 3 }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Price Details */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, bgcolor: "#fff", position: "sticky", top: 20 }}>
            <Typography variant="h6" fontWeight={700} mb={3}>
              Price Details
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography>Price ({cartItems.length} items)</Typography>
              <Typography>₹ {totalPrice.toLocaleString()}</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography>Discount</Typography>
              <Typography sx={{ color: "green" }}>
                − ₹ {discount.toLocaleString()}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography>Protect Promise Fee</Typography>
              <Typography>₹ {protectFee}</Typography>
            </Box>

            

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography fontWeight={700}>Total Amount</Typography>
              <Typography fontWeight={700}>
                ₹ {finalAmount.toLocaleString()}
              </Typography>
            </Box>

            <Typography sx={{ color: "green", mb: 2 }}>
              You will save ₹ {savings.toLocaleString()} on this order
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                background: "linear-gradient(90deg,#ff6f61,#ffa726)",
              }}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
