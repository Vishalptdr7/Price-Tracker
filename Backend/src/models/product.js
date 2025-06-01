// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    url: { type: String, required: true, unique: true },
    title: { type: String },
    image: { type: String },
    currentPrice: { type: Number },
    desiredPrice: { type: Number }, // optional: if user sets threshold
    lastCheckedAt: { type: Date, default: Date.now },
    source: { type: String, enum: ["Amazon", "Flipkart"], required: true },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;

