import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "../config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API start")
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler)
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})