import Product from "../models/product.js";
import {uploadfileOnCloudinary} from "../utils/cloudinary.js";
// @desc    Add a new product to track
// @route   POST /api/products
export const addProduct = async (req, res) => {
  try {
    const { url, title, currentPrice, desiredPrice, source } = req.body;
    const existingProduct = await Product.findOne({ url });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }
    const imageLocalPath=req.files?.image?.[0]?.path;
    if (!imageLocalPath){
      return res.status(400).json({ message: "Image is required" });
    }
    
    const image= await uploadfileOnCloudinary(imageLocalPath);
    if (!image?.url) {
      return res.status(500).json({ message: "Failed to upload image" });
    }
    const newProduct = await Product.create({
      url,
      title,
      image : image?.url || "",
      currentPrice,
      desiredPrice,
      source,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all products (admin/debug)
// @route   GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product info (like price from scraper)
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const { currentPrice, title, image, desiredPrice } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (currentPrice !== undefined) product.currentPrice = currentPrice;
    if (desiredPrice !== undefined) product.desiredPrice = desiredPrice;
    if (title !== undefined) product.title = title;
    if (image !== undefined) product.image = image;

    product.lastCheckedAt = Date.now();

    const updated = await product.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product price via scraper (cron job)
// @route   PUT /api/products/update-price-by-url
export const updateProductByUrl = async (req, res) => {
  try {
    const { url, currentPrice } = req.body;
    console.log("Updating product by URL:", url, currentPrice);
    const product = await Product.findOne({ url });
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.currentPrice = currentPrice;
    product.lastCheckedAt = new Date();

    const updated = await product.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
