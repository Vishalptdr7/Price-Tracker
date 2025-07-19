import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { Link } from "react-router-dom";

const ProductTrackPage = () => {
  const [url, setUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Show shimmer when loading starts
    try {
      const { data } = await axiosInstance.post("/api/products/track", {
        url,
        productName,
        targetPrice,
      });
      toast.success("Product tracked successfully");
      
      setUrl("");
      setProductName("");
      setTargetPrice("");
    } catch (err) {
      toast.error("Failed to track product");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ProductTrackShimmer />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe9f4] flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#333] mb-6">
          📦 Track a New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product URL
            </label>
            <input
              type="text"
              placeholder="Paste product link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5cbdb9] text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5cbdb9] text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Price (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 1999"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5cbdb9] text-sm sm:text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5cbdb9] hover:bg-[#49a9a4] text-white font-semibold py-3 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            🚀 Track Product
          </button>
        </form>

        {/* Show All Products */}
        <div className="mt-6 text-center">
          <Link
            to="/get-all-products"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow text-sm sm:text-base"
          >
            📊 Show All Tracked Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductTrackPage;
