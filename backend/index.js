const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API start")
});

app.get("/api/products", (req, res) => {
  res.send("API start")
});

app.listen(5000, () => {
  console.log("Server started")
})