# @codrjs/config

![npm version](https://img.shields.io/npm/v/@codrjs/config)
[![CodeQL](https://github.com/CodrJS/config/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/CodrJS/config/actions/workflows/codeql.yml)

## Purpose

This repository is a custom-built configuration manager for all repositories. This module manages everything configuration and should be used in all projects manages so that environment variables are unified, making transitioning development from one domain to another easy.

## Getting started

Install the package from the npm registry.

```bash
yarn add @codrjs/config
```

Import the config package and use the variables you need!

> **\*Please note:** This package assumes you have defined the environment variables you are accessing and does **no** error checking.\*

```ts
/* Import the config package */
import config, { ExpressConfig } from "@codrjs/config";
import { express } from "express";

const app = express();

app.listen(config.express.port, config.express.host, () => {
  console.log(
    `Server is starting on ${ExpressConfig.host}:${ExpressConfig.port}`,
  );
});
```

## Environemnt Variable Names

Location of environment variable is postfixed to `Config.{location}` (e.g. `Config.express.host`).

| Env var                     | Location                        | Description                                                                             |
| --------------------------- | ------------------------------- | --------------------------------------------------------------------------------------- |
| `ENV`                       | `env`                           | Deployment envionment - `dev`, `qa`, `stage`, `prod`                                    |
| `HOSTNAME`                  | `hostname`                      | Deployment docker hostname                                                              |
| `npm_package_name`          | `name`                          | Deployment service name - example: codr-user-user                                       |
| `npm_package_version`       | `version`                       | Deployment version - example: `1.0.0`                                                   |
| `AWS_REGION`                | `aws.region`                    | AWS - deployment region                                                                 |
| `AWS_SES_API_VERSION`       | `aws.ses.api.version`           | AWS SES - api version                                                                   |
| `AWS_SES_ACCESS_KEY`        | `aws.ses.access.key`            | AWS SES - IAM access key id                                                             |
| `AWS_SES_ACCESS_SECRET`     | `aws.ses.access.secret`         | AWS SES - IAM access key secret                                                         |
| `EMAIL_FROM`                | `email.from`                    | Email - from address                                                                    |
| `EMAIL_REPLY_TO`            | `email.replyto`                 | Email - reply to address(es)                                                            |
| `EXPRESS_HOST`              | `express.host`                  | Express server - listener host                                                          |
| `EXPRESS_PORT`              | `express.port`                  | Express server - listener port                                                          |
| `GIT_BRANCH`                | `git.brach`                     | Git - branch                                                                            |
| `GIT_COMMIT`                | `git.commit`                    | Git - commit sha                                                                        |
| `GIT_REPO`                  | `git.repo`                      | Git - repository                                                                        |
| `JWT_ALGORITHM`             | `jwt.algorithm`                 | JWT - algorithm, default `HS256`                                                        |
| `JWT_SECRET`                | `jwt.secret`                    | JWT - secret, key to decode jwt, must be the same across all services in an environment |
| `JWT_ISSUER`                | `jwt.issuer`                    | JWT - issuer, default `codrjs.com`                                                      |
| `KAFKA_BROKERS`             | `kafka.brokers`                 | Kafka server - comma seperated locations of the kafka brokers                           |
| `KAFKA_CLIENT_ID`           | `kafka.clientId`                | Kafka server - name of the kafka cluster                                                |
| `KAFKA_CONSUMER_GROUP`      | `kafka.consumer.group`          | Kafka server - consumer group                                                           |
| `MONGO_URI`                 | `mongo.uri`                     | MongoDB - server URL, please include username and password to this string               |
| `NODE_ENV`                  | `node.env`                      | Node environment - `development`,`production`, `testing`                                |
| `NODE_VERSION`              | `node.verison`                  | Node version - example: `16.19.1`                                                       |
| N/A                         | `node.modules`                  | Node modules - string array of all dependencies                                         |
| `YARN_VERSION`              | `node.yarnVersion`              | Node - package manager version                                                          |
| `OPENAPI_INFO_TITLE`        | `openapi.info.title`            | OpenAPI - documentation title                                                           |
| `OPENAPI_INFO_DESC`         | `openapi.info.description`      | OpenAPI - documentation description                                                     |
| `OPENAPI_SERVER_ONE_URL`    | `openapi.server[0].url`         | OpenAPI - server one url                                                                |
| `OPENAPI_SERVER_ONE_DESC`   | `openapi.server[0].description` | OpenAPI - server one description                                                        |
| `OPENAPI_SERVER_TWO_URL`    | `openapi.server[1].url`         | OpenAPI - server two url                                                                |
| `OPENAPI_SERVER_TWO_DESC`   | `openapi.server[1].description` | OpenAPI - server two description                                                        |
| `OPENAPI_SERVER_THREE_URL`  | `openapi.server[2].url`         | OpenAPI - server three url                                                              |
| `OPENAPI_SERVER_THREE_DESC` | `openapi.server[2].description` | OpenAPI - server three description                                                      |
| `OPENAPI_SERVER_FOUR_URL`   | `openapi.server[3].url`         | OpenAPI - server four url                                                               |
| `OPENAPI_SERVER_FOUR_DESC`  | `openapi.server[3].description` | OpenAPI - server four description                                                       |
| `OPENAPI_SERVER_FIVE_URL`   | `openapi.server[4].url`         | OpenAPI - server five url                                                               |
| `OPENAPI_SERVER_FIVE_DESC`  | `openapi.server[4].description` | OpenAPI - server five description                                                       |

## TODO

- [ ] ...

## Contributing

```bash
# Clone the repo
git clone git@github.com:CodrJS/config.git

# Install yarn if you don't have it already
npm install -g yarn

# Install dependencies, build, and test the code
yarn install
yarn build
yarn test
```
