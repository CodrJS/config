import dotenv from "dotenv";
dotenv.config();

import { AWSConfig } from "./AWSConfig";
import { EmailConfig } from "./EmailConfig";
import { ExpressConfig } from "./ExpressConfig";
import { JWTConfig } from "./JWTConfig";
import { KafkaConfig } from "./KafkaConfig";
import { MonogoConfig } from "./MongoConfig";

const Config = {
  aws: AWSConfig,
  email: EmailConfig,
  env: process.env.ENV as "dev" | "qa" | "stage" | "prod",
  express: ExpressConfig,
  jwt: JWTConfig,
  kafka: KafkaConfig,
  mongo: MonogoConfig,
};

export {
  AWSConfig,
  EmailConfig,
  ExpressConfig,
  JWTConfig,
  KafkaConfig,
  MonogoConfig,
};
export default Config;
