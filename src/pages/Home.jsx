import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function HomePage() {
  const gradient = "linear-gradient(90deg,#ff6f61,#ffa726)";

  // Slider images
  const sliderProducts = [
    {
      id: 1,
      name: "Gold Necklace",
      image: "https://vogstya.com//storage/banners/FQ3xqNsLScVuCVupvk5RlFL0zqnxCh6es62pG3EJ.jpg",
    },
    {
      id: 2,
      name: "Diamond Ring",
      image: "https://vogstya.com//storage/banners/zxtyHZG5LOmOseNhYdM4F6AQG6FNlbDVe1KUDQ4v.png",
    },
    {
      id: 3,
      name: "Silver Bracelet",
      image: "https://vogstya.com//storage/banners/FQ3xqNsLScVuCVupvk5RlFL0zqnxCh6es62pG3EJ.jpg",
    },
  ];

  // Trending products
  const trendingProducts = [
    { title: "Elegant Necklace", price: "$120", image: "https://via.placeholder.com/300x300?text=Necklace" },
    { title: "Stylish Shoes", price: "$90", image: "https://via.placeholder.com/300x300?text=Shoes" },
    { title: "Classic Watch", price: "$150", image: "https://via.placeholder.com/300x300?text=Watch" },
    { title: "Designer Handbag", price: "$200", image: "https://via.placeholder.com/300x300?text=Handbag" },
  ];

  // Categories
  const categories = [
    { name: "Jewelry", image: "https://via.placeholder.com/400x300?text=Jewelry" },
    { name: "Clothing", image: "https://via.placeholder.com/400x300?text=Clothing" },
    { name: "Shoes", image: "https://via.placeholder.com/400x300?text=Shoes" },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // automatic sliding
    autoplaySpeed: 3000,  // every 3 seconds
    arrows: false,        // hide arrows if you want fully automatic
    pauseOnHover: false,  // keep sliding even on hover
  };

  return (
    <Box sx={{ bgcolor: "#f8f8f8", minHeight: "100vh" }}>
      {/* ================= HERO SLIDER ================= */}
      <Box sx={{ py: 4 }}>
        <Slider {...sliderSettings}>
          {sliderProducts.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                height: { xs: 200, md: 400 },
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  py: 2,
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { xs: 14, md: 18 },
                }}
              >
                {item.name}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

     {/* Trending Products */}
      <Container sx={{ py: 6 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 700, mb: 4, textAlign: "center" }}>
          Trending Products
        </Typography>
        <Grid container spacing={4}>
          {trendingProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{ height: 250 }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontWeight: 600 }}>{product.title}</Typography>
                  <Typography sx={{ color: "#ff6f61", fontWeight: 700 }}>
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories */}
      <Container sx={{ py: 6 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 700, mb: 4, textAlign: "center" }}>
          Categories
        </Typography>
        <Grid container spacing={4}>
          {categories.map((cat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <img src={cat.image} alt={cat.name} style={{ width: "100%", display: "block" }} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    py: 1.5,
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  {cat.name}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Special Offers / Banner */}
      <Box
        sx={{
          bgcolor: "#111",
          color: "#fff",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: 700, mb: 2 }}>
          Special Offer: Up to 50% Off!
        </Typography>
        <Typography sx={{ fontSize: { xs: 16, md: 20 }, mb: 4 }}>
          Limited Time Only
        </Typography>
        <Button
          sx={{
            bgcolor: gradient,
            color: "#fff",
            px: 4,
            py: 1.5,
            fontSize: 16,
            "&:hover": { bgcolor: gradient },
          }}
        >
          Shop Offers
        </Button>
      </Box>

      {/* Newsletter / CTA */}
     
    </Box>
  );
}
