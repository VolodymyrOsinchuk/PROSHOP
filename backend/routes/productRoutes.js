import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/product").post(createProduct);
router.route("/products").get(getProducts);

router
  .route("/product/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

export default router;
