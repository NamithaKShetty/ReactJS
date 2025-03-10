import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products when Home page loads
  useEffect(() => {
    axios.get('http://localhost:5002/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <Container>
      {/* Hero Section */}
      <Box sx={{
        backgroundImage: 'url(https://source.unsplash.com/1600x600/?shopping,ecommerce)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        borderRadius: 2,
        my: 4,
      }}>
        <Typography variant="h3" fontWeight="bold">Welcome to Your Retail Store</Typography>
      </Box>

      {/* Featured Categories */}
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>Featured Categories</Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { name: 'Electronics', image: 'https://source.unsplash.com/300x200/?electronics' },
          { name: 'Fashion', image: 'https://source.unsplash.com/300x200/?fashion' },
          { name: 'Home Decor', image: 'https://source.unsplash.com/300x200/?furniture' },
        ].map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" height="140" image={category.image} alt={category.name} />
              <CardContent>
                <Typography variant="h6">{category.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Featured Products */}
      <Typography variant="h4" sx={{ textAlign: 'center', my: 3 }}>Featured Products</Typography>
      <Grid container spacing={3}>
        {products.length > 0 ? (
          products.slice(0, 4).map((product) => (  // Show only first 4 products
            <Grid item xs={12} sm={6} md={3} key={product._id}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>₹{product.price}</Typography>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ m: 1 }}>Add to Cart</Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" sx={{ mt: 3 }}>No products available.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
