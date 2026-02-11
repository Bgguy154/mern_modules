const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// 30 Items categorized equally
let menu = [
  // BREAKFAST
  { id: 1, name: "Pancakes", category: "Breakfast", price: 120, available: true },
  { id: 2, name: "Omelette", category: "Breakfast", price: 90, available: true },
  { id: 3, name: "Masala Dosa", category: "Breakfast", price: 80, available: true },
  { id: 4, name: "French Toast", category: "Breakfast", price: 110, available: true },
  { id: 5, name: "Idli Sambar", category: "Breakfast", price: 70, available: true },
  { id: 6, name: "Poha", category: "Breakfast", price: 60, available: true },
  // MAIN COURSE
  { id: 7, name: "Paneer Butter Masala", category: "Main Course", price: 250, available: true },
  { id: 8, name: "Chicken Biryani", category: "Main Course", price: 320, available: true },
  { id: 9, name: "Dal Makhani", category: "Main Course", price: 180, available: true },
  { id: 10, name: "Pasta Alfredo", category: "Main Course", price: 220, available: true },
  { id: 11, name: "Veg Thali", category: "Main Course", price: 350, available: true },
  { id: 12, name: "Mutton Rogan Josh", category: "Main Course", price: 450, available: true },
  // FAST FOOD
  { id: 13, name: "Veg Burger", category: "Fast Food", price: 120, available: true },
  { id: 14, name: "Cheese Pizza", category: "Fast Food", price: 299, available: true },
  { id: 15, name: "French Fries", category: "Fast Food", price: 99, available: true },
  { id: 16, name: "Chicken Nuggets", category: "Fast Food", price: 150, available: true },
  { id: 17, name: "Hot Dog", category: "Fast Food", price: 130, available: true },
  { id: 18, name: "Tacos", category: "Fast Food", price: 180, available: true },
  // DESSERT
  { id: 19, name: "Chocolate Brownie", category: "Dessert", price: 150, available: true },
  { id: 20, name: "Gulab Jamun", category: "Dessert", price: 60, available: true },
  { id: 21, name: "Cheesecake", category: "Dessert", price: 210, available: true },
  { id: 22, name: "Ice Cream Scoop", category: "Dessert", price: 80, available: true },
  { id: 23, name: "Apple Pie", category: "Dessert", price: 170, available: true },
  { id: 24, name: "Tiramisu", category: "Dessert", price: 250, available: true },
  // DRINKS
  { id: 25, name: "Iced Coffee", category: "Drinks", price: 140, available: true },
  { id: 26, name: "Fresh Lime Soda", category: "Drinks", price: 60, available: true },
  { id: 27, name: "Mango Lassi", category: "Drinks", price: 90, available: true },
  { id: 28, name: "Coke", category: "Drinks", price: 50, available: true },
  { id: 29, name: "Orange Juice", category: "Drinks", price: 120, available: true },
  { id: 30, name: "Hot Chocolate", category: "Drinks", price: 160, available: true }
];

let orders = [];

// --- ROUTES ---

// Get Menu
app.get("/menu", (req, res) => res.json(menu));

// Place Order
app.post("/order", (req, res) => {
  const { cart, total } = req.body;
  if (!cart || cart.length === 0) return res.status(400).json({ error: "Empty order" });

  const newOrder = { orderId: Date.now(), items: cart, total, status: "Pending" };
  orders.push(newOrder);
  res.status(201).json({ message: "Order placed!", orderId: newOrder.orderId });
});

// Admin: Add Item
app.post("/menu", (req, res) => {
  const newItem = { id: menu.length + 1, ...req.body, available: true };
  menu.push(newItem);
  res.status(201).json(newItem);
});

// Admin: Full Update
app.put("/menu/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = menu.findIndex(m => m.id === id);
  if (index === -1) return res.status(404).json({ error: "Item not found" });
  menu[index] = { id, ...req.body };
  res.json(menu[index]);
});

// Admin: Partial Update (Status)
app.patch("/menu/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = menu.find(m => m.id === id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  Object.assign(item, req.body);
  res.json(item);
});

// Admin: Delete Item
app.delete("/menu/:id", (req, res) => {
  const id = parseInt(req.params.id);
  menu = menu.filter(m => m.id !== id);
  res.json({ message: "Item removed" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));