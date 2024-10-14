import config from "@repo/env";
import mongoose from "mongoose";
import logger from "@repo/logger";

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(config.DATABASE_URL);
  } catch (error) {
    mongoose.connection.on("connected", () => {
      logger.info("Connected To DB");
    });
  }
};

export default connectToDB;
