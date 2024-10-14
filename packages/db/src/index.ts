import mongoose, { mongo } from "mongoose";
// import config from "@repo/env";
// import logger from "@repo/logger";

const connectToDB = async () => {
  try {
    // const connection = await mongoose.connect(config.DATABASE_URL);
  } catch (error) {
    // mongoose.connection.on("connected", () => {
    //   logger.log("Connected To DB");
    // });
  }
};

export default connectToDB;
