import dotenv from "dotenv";
dotenv.config();

import { ExpressConfig } from "./ExpressConfig";
import { JWTConfig } from "./JWTConfig";
import { KafkaConfig } from "./KafkaConfig";
import { MonogoConfig } from "./MongoConfig";

const config = {
  env: process.env.ENV as "dev" | "qa" | "stage" | "prod",
  express: ExpressConfig,
  jwt: JWTConfig,
  kafka: KafkaConfig,
  mongo: MonogoConfig,
};

export { ExpressConfig, JWTConfig, KafkaConfig, MonogoConfig };
export default config;
