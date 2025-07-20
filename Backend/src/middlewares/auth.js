import { ApiError } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "No token provided");
    }
    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodeToken.id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    throw new ApiError(401, error.message);
  }
});

export default verifyJWT;