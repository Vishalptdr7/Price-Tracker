import UserProductTrack from "../models/userProductTrack.js";
import Product from "../models/product.js";

// @desc    Track a new product
// @route   POST /api/tracks
export const trackProduct = async (req, res) => {
  try {
    const { productId, desiredPrice, notifyOnDrop } = req.body;

    const existing = await UserProductTrack.findOne({
      user: req.user.id,
      product: productId,
    });

    if (existing) {
      return res.status(400).json({ message: "Already tracking this product" });
    }

    const track = await UserProductTrack.create({
      user: req.user.id,
      product: productId,
      desiredPrice,
      notifyOnDrop,
    });

    res.status(201).json(track);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all products tracked by logged-in user
// @route   GET /api/tracks
export const getUserTrackedProducts = async (req, res) => {
  try {
    const tracks = await UserProductTrack.find({ user: req.user.id })
      .populate("product")
      .sort({ createdAt: -1 });

    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a specific track by ID
// @route   GET /api/tracks/:id
export const getTrackById = async (req, res) => {
  try {
    const track = await UserProductTrack.findById(req.params.id).populate(
      "product"
    );

    if (!track || track.user.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ message: "Track not found or unauthorized" });
    }

    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update track (e.g. desiredPrice, notifyOnDrop)
// @route   PUT /api/tracks/:id
export const updateTrack = async (req, res) => {
  try {
    const track = await UserProductTrack.findById(req.params.id);

    if (!track || track.user.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ message: "Track not found or unauthorized" });
    }

    track.desiredPrice = req.body.desiredPrice ?? track.desiredPrice;
    track.notifyOnDrop = req.body.notifyOnDrop ?? track.notifyOnDrop;
    track.isActive = req.body.isActive ?? track.isActive;

    const updated = await track.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Untrack a product (soft delete by setting isActive to false)
// @route   PUT /api/tracks/:id/deactivate
export const deactivateTrack = async (req, res) => {
  try {
    const track = await UserProductTrack.findById(req.params.id);

    if (!track || track.user.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ message: "Track not found or unauthorized" });
    }

    track.isActive = false;
    const updated = await track.save();
    res
      .status(200)
      .json({ message: "Product untracked successfully", track: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a track (hard delete)
// @route   DELETE /api/tracks/:id
export const deleteTrack = async (req, res) => {
  try {
    const track = await UserProductTrack.findById(req.params.id);

    if (!track || track.user.toString() !== req.user.id) {
      return res
        .status(404)
        .json({ message: "Track not found or unauthorized" });
    }

    await UserProductTrack.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Track deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
