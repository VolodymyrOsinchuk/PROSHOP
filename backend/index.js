import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import colors from "colors";
import connectDB from "../config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";

<<<<<<< HEAD
dotenv.config();

=======
>>>>>>> 1c2340d5f64f37cea7c364f9bdece4c08698e299
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API start");
});

app.use("/api", productRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/upload", express.static(path.join(__dirname, "/uploads")));

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
