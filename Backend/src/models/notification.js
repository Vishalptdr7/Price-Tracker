// models/NotificationLog.js
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    message: { type: String },
    method: { type: String, enum: ["Email", "SMS"] },
    sentAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Notifications = mongoose.model("Notification", notificationSchema);
export default Notifications;
