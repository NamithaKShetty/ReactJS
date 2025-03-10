const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Add a new product (Admin feature)
router.post('/add', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const product = new Product({ name, price, description, image });
    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
});

module.exports = router;
