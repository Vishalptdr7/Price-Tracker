// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // matches the name used in `mongoose.model("user", ...)`
    required: true,
  },
  url: { type: String, required: true },
  productName: { type: String, required: true },
  targetPrice: { type: Number, required: true },
  currentPrice: { type: Number },
  lastChecked: { type: Date, default: Date.now },
  priceHistory: [
    {
      price: Number,
      checkedAt: { type: Date, default: Date.now },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
