import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "../config/db.js";
import products from "./data.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API start")
});

app.get("/api/products", (req, res) => {
  console.log(products)
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  console.log(product)
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})