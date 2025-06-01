// models/UserProductTrack.js
import mongoose from "mongoose";

const userProductTrackSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    desiredPrice: { type: Number }, // user-defined target price
    isActive: { type: Boolean, default: true },
    notifyOnDrop: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const UserProductTrack = mongoose.model("UserProductTrack", userProductTrackSchema);

export default UserProductTrack;
