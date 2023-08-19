import mongoose from "mongoose";
import config from "../config.js";

const url = config.MONGO_URL;

const connectDB = async () => {
  try {
    //database Name
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database 👍`);
  } catch (error) {
    console.log(error)
    console.error(`Database 👎`);
    process.exit(1);
  }
};

export default connectDB;
