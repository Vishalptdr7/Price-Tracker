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
priceHistoryRouter.route("/:productId").get(getPriceHistoryByProduct);
priceHistoryRouter.route("/:productId/latest").get(getLatestPriceForProduct);
priceHistoryRouter.route("/:productId").delete(deletePriceHistoryForProduct);

export default priceHistoryRouter;
