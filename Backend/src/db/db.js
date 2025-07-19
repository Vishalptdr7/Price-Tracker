



import mongoose from "mongoose";
import { startCronJob } from "../cron/priceChecker.js";

const DBconnection = async () => {
  try {
    const connectionData = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${connectionData.connection.host}`);
    startCronJob(); // Start the cron job after successful DB connection
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default DBconnection;
