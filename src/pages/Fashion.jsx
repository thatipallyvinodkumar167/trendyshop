import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";

export default function Fashion() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Combine multiple categories to simulate Fashion
    const urls = [
      "https://dummyjson.com/products/category/mens-shirts",
      "https://dummyjson.com/products/category/mens-shoes",
      "https://dummyjson.com/products/category/womens-dresses",
      "https://dummyjson.com/products/category/womens-shoes",
      "https://dummyjson.com/products/category/jewelery",
    ];

    Promise.all(urls.map(url => fetch(url).then(res => res.json())))
      .then(responses => {
        // Flatten all products into one array
        const allProducts = responses.flatMap(r => r.products);
        setProducts(allProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching fashion products:", err);
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
        Fashion Collection
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {products.map(p => (
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
