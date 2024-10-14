import * as dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  DATABASE_URL: string;
  NODE_ENV: string;
}

const config: Config = {
  PORT: parseInt(process.env.PORT || "3000", 10),
  DATABASE_URL: process.env.DATABASE_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
