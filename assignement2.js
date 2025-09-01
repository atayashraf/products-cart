const express = require('express');
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 }
];

// GET /products - returns list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /cart - accepts productId and quantity, returns total price
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  const totalPrice = product.price * quantity;
  res.json({ totalPrice });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});