import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";

export default function Jewelry() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Multiple endpoints for jewelry (simulate different subcategories)
    const urls = [
      "https://dummyjson.com/products/category/womens-jewellery",
      "https://dummyjson.com/products/category/mens-jewellery", // another category
    ];

    Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
      .then((responses) => {
        // Combine all products
        const allProducts = responses.flatMap((r) => r.products);

        // Remove duplicates based on ID
        const uniqueProducts = Array.from(
          new Map(allProducts.map((p) => [p.id, p])).values()
        );

        setProducts(uniqueProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Jewelry products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8f8f8", minHeight: "100vh", py: 5 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: 24, md: 32 },
          fontWeight: 700,
          mb: 4,
        }}
      >
        Jewelry's Collection
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {products.map((p) => (
            <Grid item key={p.id}>
              <ProductCard
                product={{
                  id: p.id,
                  title: p.title,
                  price: p.price,
                  image: p.thumbnail || p.images?.[0],
                  rating: { rate: p.rating, count: p.stock },
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
