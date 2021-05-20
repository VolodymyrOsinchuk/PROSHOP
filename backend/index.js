const express = require("express");
const products = require("./data");

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

app.listen(5000, () => {
  console.log("Server started")
})