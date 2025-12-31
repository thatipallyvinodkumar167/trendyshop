import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Divider,
} from "@mui/material";

const SellerDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Gold Necklace", price: 2500, stock: 10 },
    { id: 2, name: "Silver Ring", price: 1200, stock: 20 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;

    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...newProduct,
      },
    ]);

    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Avatar sx={{ width: 64, height: 64, mr: 2 }}>
          S
        </Avatar>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Seller Dashboard
          </Typography>
          <Typography color="text.secondary">
            Manage your products & orders
          </Typography>
        </Box>
      </Box>

      {/* STATS */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { label: "Total Products", value: products.length },
          { label: "Total Orders", value: 124 },
          { label: "Total Revenue", value: "₹ 1,25,000" },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ADD PRODUCT */}
      <Card sx={{ mb: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Add New Product
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Product Name"
                fullWidth
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                label="Price"
                type="number"
                fullWidth
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                label="Stock"
                type="number"
                fullWidth
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                onClick={handleAddProduct}
                sx={{
                  height: "100%",
                  background: "linear-gradient(90deg,#ff6f61,#ffa726)",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": {
                    background: "linear-gradient(90deg,#ff6f61,#ffa726)",
                  },
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* PRODUCT LIST */}
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            My Products
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Product</b></TableCell>
                <TableCell><b>Price</b></TableCell>
                <TableCell><b>Stock</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>₹ {product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SellerDashboard;
