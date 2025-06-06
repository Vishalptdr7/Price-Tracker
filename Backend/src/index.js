import express from "express";
import dotenv from "dotenv";
import DBconnection from "./db/db.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config({
    path: "./env",
  });
  const app = express();


  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT", "POST"],
      credentials: true,
    })
  );
  // app.use(upload.none());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(cookieParser({}));
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

app.listen(process.env.PORT ,()=>{
    console.log("Server Started on Port "+process.env.PORT);
    DBconnection().then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.error("Database Connection Failed: ", err);
    });
});




import userRouter from "./routes/user.js";
app.use("/api/users", userRouter);

import productRouter from "./routes/product.js";
app.use("/api/products", productRouter);

import userProductTrackRouter from "./routes/userProductTrack.js";
app.use("/api/tracks", userProductTrackRouter);

import priceHistoryRouter from "./routes/priceHistory.js";
app.use("/api/price-history", priceHistoryRouter);

import notificationRouter from "./routes/notification.js";
app.use("/api/notifications", notificationRouter);

export default app;