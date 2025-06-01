



import mongoose from "mongoose";


const DBconnection = async () => {
  try {
    const connectionData = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(`Database Connected: ${connectionData.connection.host}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default DBconnection;
