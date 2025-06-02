import Notification from "../models/notification.js"
import { User } from "../models/User.js";
import Product from "../models/product.js";

// @desc    Log a notification (email or SMS) when sent
// @route   POST /api/notifications
export const logNotification = async (req, res) => {
  try {
    const userId=req.user._id
    console.log(userId);
    const {  productId, message, method } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).json({ message: "User or Product not found" });
    }

    const log = await Notification.create({
      user: userId,
      product: productId,
      message,
      method,
    });

    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all notifications (admin use or debug)
// @route   GET /api/notifications
export const getAllNotifications = async (req, res) => {
  try {
    const logs = await Notification.find()
      .populate("user", "name email")
      .populate("product", "title");

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get notifications for a specific user
// @route   GET /api/notifications/user/:userId
export const getNotificationsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    const logs = await Notification.find({ user: userId })
      .populate("product", "title")
      .sort({ sentAt: -1 });

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get notifications for a specific product
// @route   GET /api/notifications/product/:productId
export const getNotificationsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const logs = await Notification.find({ product: productId })
      .populate("user", "name email")
      .sort({ sentAt: -1 });

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete all notification logs (admin/debug)
// @route   DELETE /api/notifications
export const deleteAllNotifications = async (req, res) => {
  try {
    const result = await Notification.deleteMany();
    res.status(200).json({ message: `Deleted ${result.deletedCount} logs.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
