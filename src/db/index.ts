import mongoose from "mongoose";
import { DB_NAME } from "../helpers/constants.js";
export async function connectDB() {
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}?authSource=admin`,
    );
    console.log(`DB is connected...HOST: ${dbInstance.connection.host}`);
  } catch (error) {
    throw error;
  }
}
