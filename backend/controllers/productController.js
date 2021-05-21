import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import {upload} from "../routes/uploadRoutes.js"

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler (async (req, res) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.json(products);
  } catch (error) {
    
  }
});

// @desc Fetch sigle product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler (async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404)
    throw new Error("Product not found")
  };
  } catch (error) {
    console.error(error)
  }
});

// @desc Delete a product
// @route Delete /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler (async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed'});
  } else {
    res.status(404)
    throw new Error("Product not found")
  };
  } catch (error) {
    console.error(error)
  }
});

// @desc Create a product
// @route Delete /api/products
// @access Private/Admin
const createProduct = asyncHandler (async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: '/image/sample.jpg',
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description'
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct)
});

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler (upload.single('image'), async (req, res) => {
  console.log('req.params.id', req.params.id);
  console.log('req.file >>>', req.file);

  const {name, price, description, image, brand, category, countInStock} = req.body;
  const product = await Product.findById(req.params.id);
  console.log('product >>>>', product);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;


    const updateProduct = await product.save();
    res.status(201).json(updateProduct)
  } else {
    res.status(404);
    throw new Error('Product not found')
  }

});

export {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct
}