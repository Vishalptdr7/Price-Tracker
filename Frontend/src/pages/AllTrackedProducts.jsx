import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { useNavigate } from "react-router-dom";

const AllTrackedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/products/all/gets");
      if (data?.products) setProducts(data.products);
      else setProducts([]);
    } catch (error) {
      toast.error("Failed to fetch products");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-medium text-gray-600">
        Loading products...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🛒 All Tracked Products
        </h1>

        {products.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            No products tracked yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium">Current Price:</span> ₹
                  {product.currentPrice}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium">Target Price:</span> ₹
                  {product.targetPrice}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium">Last Checked:</span>{" "}
                  {new Date(product.lastChecked).toLocaleString()}
                </p>
                <p className="text-sm text-blue-600 truncate mb-3">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label={`View product ${product.productName} on external site`}
                  >
                    View Product ↗
                  </a>
                </p>
                <button
                  onClick={() => navigate(`/product/${product._id}/graph`)}
                  className="w-full mt-2 bg-[#5cbdb9] hover:bg-[#49a9a4] text-white font-medium py-2 rounded-lg transition duration-300"
                  aria-label={`View price graph for ${product.productName}`}
                >
                  📈 View Price Graph
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTrackedProducts;
