import { Router } from "express";
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

productRouter.route("/add").post(verifyJWT, addProduct);
productRouter.route("/").get(verifyJWT, getAllProducts);
productRouter.route("/:id").get(verifyJWT, getProductById);
productRouter.route("/:id").put(verifyJWT, updateProduct);
productRouter.route("/:id").delete(verifyJWT, deleteProduct);
productRouter.route("/update-price-by-url").put(verifyJWT, updateProductByUrl);
export default productRouter;
