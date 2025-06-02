import { Router } from "express";
import {
  logNotification,
  getAllNotifications,
  getNotificationsByUser,
  getNotificationsByProduct,
  deleteAllNotifications,
} from "../controllers/notification.js";
import verifyJWT from "../middlewares/auth.js";

const notificationRouter = Router();

notificationRouter.use(verifyJWT);

notificationRouter.route("/")
  .post(logNotification); // Endpoint to log a notification
notificationRouter.route("/").get(getAllNotifications); // Endpoint to get all notifications
notificationRouter.route("/user/:userId")
  .get(getNotificationsByUser); // Endpoint to get notifications by user ID
notificationRouter.route("/product/:productId")
  .get(getNotificationsByProduct); // Endpoint to get notifications by product ID
notificationRouter.route("/")
  .delete(deleteAllNotifications); // Optional endpoint to delete all notifications (admin/debug)

export default notificationRouter;
