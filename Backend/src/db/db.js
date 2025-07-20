



import mongoose from "mongoose";
import { startCronJob } from "../cron/priceChecker.js";

const DBconnection = async () => {
  try {
    const connectionData = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Database Connected: ${connectionData.connection.host}`);

    // Start cron job only after DB is confirmed up
    startCronJob();
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    throw error;
  }
};

export default DBconnection;

