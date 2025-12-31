import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Rating,
} from "@mui/material";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ useNavigate hook

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    navigate("/cart");  // Navigate to Cart page
  };

  return (
    <Card
      sx={{
        width: 280,
        height: 420,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: 8 },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          height: 220,
          bgcolor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <CardMedia
          component="img"
          image={product.image || "https://via.placeholder.com/300"}
          alt={product.title}
          sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </Box>

      {/* CONTENT */}
      <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 2 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 14,
            mb: 1,
            height: 36,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Rating
            value={product.rating?.rate || 4}
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>

        <Typography
          sx={{ fontWeight: 700, fontSize: 16, color: "#ff6f61", mb: 2 }}
        >
          ₹ {product.price}
        </Typography>

        <Button
          fullWidth
          onClick={handleAddToCart}
          sx={{
            mt: "auto",
            py: 1,
            fontWeight: 600,
            background: "linear-gradient(90deg,#ff6f61,#ffa726)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg,#ff6f61,#ffa726)",
            },
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
