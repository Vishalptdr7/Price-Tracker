import { Router } from "express";
import {
  trackProduct,
  getUserTrackedProducts,
  getTrackById,
  updateTrack,
  deactivateTrack,
  deleteTrack,
} from "../controllers/userProductTrack.js";
import verifyJWT from "../middlewares/auth.js";

const userProductTrackRouter =Router();
userProductTrackRouter.route("/").post(verifyJWT, trackProduct);
userProductTrackRouter.route("/").get(verifyJWT, getUserTrackedProducts);
userProductTrackRouter.route("/:id").get(verifyJWT, getTrackById);
userProductTrackRouter.route("/:id").put(verifyJWT, updateTrack);
userProductTrackRouter.route("/:id/deactivate").put(verifyJWT, deactivateTrack);
userProductTrackRouter.route("/:id").delete(verifyJWT, deleteTrack);



export default userProductTrackRouter;
