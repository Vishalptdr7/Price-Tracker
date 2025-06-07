import { Router } from "express";

import verifyJWT from "../middlewares/auth.js";
import { getAllProducts, getPriceHistory, getProductById, trackProduct } from "../controllers/product.js";
const productRouter =Router();


productRouter.route("/track").post(verifyJWT, trackProduct);
productRouter.route("/:id").get(verifyJWT,getProductById);
productRouter.route("/history/:productId").get(verifyJWT,getPriceHistory);
productRouter.route("/all/gets").get(verifyJWT,getAllProducts)
export default productRouter;



