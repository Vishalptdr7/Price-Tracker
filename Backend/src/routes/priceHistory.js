import { Router } from "express";
import {
  addPriceEntry,
  getPriceHistoryByProduct,
  getLatestPriceForProduct,
  deletePriceHistoryForProduct,
} from "../controllers/priceHistory.js";
import verifyJWT from "../middlewares/auth.js";

const priceHistoryRouter = Router();

priceHistoryRouter.use(verifyJWT);

priceHistoryRouter.route("/add").post(addPriceEntry);
priceHistoryRouter.route("/product/:productId").get(getPriceHistoryByProduct);
priceHistoryRouter.route("/product/:productId/latest").get(getLatestPriceForProduct);
priceHistoryRouter.route("/product/:productId").delete(deletePriceHistoryForProduct);

export default priceHistoryRouter;
