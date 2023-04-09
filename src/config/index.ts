import dotenv from "dotenv";
dotenv.config();

import { AWSConfig } from "./AWSConfig";
import { EmailConfig } from "./EmailConfig";
import { ExpressConfig } from "./ExpressConfig";
import { GitConfig } from "./GitConfig";
import { JWTConfig } from "./JWTConfig";
import { KafkaConfig } from "./KafkaConfig";
import { MonogoConfig } from "./MongoConfig";
import { NodeConfig } from "./NodeConfig";
import { OpenAPIConfig } from "./OpenAPI";

const GeneralConfig = {
  env: process.env.ENV as "dev" | "qa" | "stage" | "prod",
  version: process.env.npm_package_version as string,
  name: process.env.npm_package_name as string,
  hostname: process.env.HOSTNAME as string,
};

const Config = {
  aws: AWSConfig,
  email: EmailConfig,
  express: ExpressConfig,
  jwt: JWTConfig,
  git: GitConfig,
  kafka: KafkaConfig,
  mongo: MonogoConfig,
  node: NodeConfig,
  openapi: OpenAPIConfig,
  ...GeneralConfig,
};

export {
  AWSConfig,
  EmailConfig,
  ExpressConfig,
  GitConfig,
  JWTConfig,
  KafkaConfig,
  MonogoConfig,
  NodeConfig,
  OpenAPIConfig,
};

export default Config;
