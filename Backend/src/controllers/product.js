




// controllers/productController.js
import Product from "../models/product.js";
import { getPriceFromURL } from "../utils/scraper.js";

// CREATE AND TRACK PRODUCT
export const trackProduct = async (req, res) => {
  try {
    const { url, productName, targetPrice } = req.body;

    const price = await getPriceFromURL(url);

    const product = await Product.create({
      user: req.user._id, // 👈 store user ObjectId
      url,
      productName,
      targetPrice,
      currentPrice: price,
      lastChecked: new Date(),
    });

    res.status(200).json({ message: "Product tracked", product });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error tracking product", error: err.message });
  }
};

// GET PRODUCT BY ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate("user", "email");

    if (!product) return res.status(404).json({ message: "Product not found" });
    
    res.status(200).json({ message: "Product fetched", product });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: err.message });
  }
};



export const getPriceHistory = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ history: product.priceHistory });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




// GET ALL PRODUCTS FOR LOGGED-IN USER
export const getAllProducts = async (req, res) => {
  try {
    
    const products = await Product.find({ user: req.user._id })

      .populate("user", "email")
      .sort({ lastChecked: -1 });

    res.status(200).json({ message: "Products fetched", products });
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err.message });
  }
};




// DELETE PRODUCT BY ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the product
    const product = await Product.findById(id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the product belongs to the logged-in user
    if (product.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this product" });
    }

    // Delete the product
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err.message });
  }
};
