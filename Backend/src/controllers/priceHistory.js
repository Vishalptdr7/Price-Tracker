import PriceHistory from "../models/priceHistory.js";
import Product from "../models/product.js";

// @desc    Add a price entry (used by scraper/cron job)
// @route   POST /api/price-history
export const addPriceEntry = async (req, res) => {
  try {
    const { productId, price } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const priceEntry = await PriceHistory.create({
      product: productId,
      price,
    });

    res.status(201).json(priceEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get price history for a specific product
// @route   GET /api/price-history/product/:productId
export const getPriceHistoryByProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const entries = await PriceHistory.find({ product: productId }).sort({
      date: 1,
    }); // oldest to newest

    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get latest price entry for a product
// @route   GET /api/price-history/product/:productId/latest
export const getLatestPriceForProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const latestEntry = await PriceHistory.findOne({ product: productId }).sort(
      { date: -1 }
    );

    if (!latestEntry) {
      return res
        .status(404)
        .json({ message: "No price history found for this product" });
    }

    res.status(200).json(latestEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete all price history for a product (admin/debug)
// @route   DELETE /api/price-history/product/:productId
export const deletePriceHistoryForProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const deleted = await PriceHistory.deleteMany({ product: productId });
    res
      .status(200)
      .json({ message: `Deleted ${deleted.deletedCount} entries` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
