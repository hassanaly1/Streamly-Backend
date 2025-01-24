import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DATABASE_NAME}`
    );
    console.log(
      `Connected to Database Successfully at Host: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectToDatabase;
