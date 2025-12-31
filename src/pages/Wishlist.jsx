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

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (
    <Card
      sx={{
        width: 280,              // ✅ fixed width
        height: 420,             // ✅ fixed height
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          height: 220,           // ✅ fixed image area
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
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* CONTENT */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          p: 2,
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 14,
            mb: 1,
            height: 36,           // ✅ same height for all titles
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>

        {/* RATING */}
        <Box sx={{ mb: 1 }}>
          <Rating
            value={product.rating?.rate || 4}
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>

        {/* PRICE */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 16,
            color: "#ff6f61",
            mb: 2,
          }}
        >
          ₹ {product.price}
        </Typography>

        {/* BUTTON */}
        <Button
          fullWidth
          onClick={() => addToCart(product)}   // ✅ add to cart
          sx={{
            mt: "auto",           // ✅ button always at bottom
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
