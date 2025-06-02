import { Router } from "express";
import {upload} from "../middlewares/multer.js";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductByUrl,
} from "../controllers/product.js";
import verifyJWT from "../middlewares/auth.js";

const productRouter =Router();

productRouter.route("/add").post(
  verifyJWT,
  upload.fields([{ name: "image", maxCount: 1 }]), // <-- multer expects a field called "image"
  addProduct
);
productRouter.route("/").get(verifyJWT, getAllProducts);
productRouter.route("/:id").get(verifyJWT, getProductById);
productRouter.route("/:id").put(verifyJWT, updateProduct);
productRouter.route("/:id").delete(verifyJWT, deleteProduct);
productRouter.route("/update-price-by-url").patch(verifyJWT, updateProductByUrl);
export default productRouter;
