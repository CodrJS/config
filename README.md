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

| Env var                | Location               | Required | Description                                                                             |
| ---------------------- | ---------------------- | -------- | --------------------------------------------------------------------------------------- |
| `ENV`                  | `env`                  | `true`   | Deployment envionment - `dev`, `qa`, `stage`, `prod`                                    |
| `EXPRESS_HOST`         | `express.host`         | `false`  | Express server - listener host                                                          |
| `EXPRESS_PORT`         | `express.port`         | `false`  | Express server - listener port                                                          |
| `MONGO_URI`            | `mongo.uri`            | `false`  | MongoDB - server URL, please include username and password to this string.              |
| `KAFKA_CONSUMER_GROUP` | `kafka.consumer.group` | `false`  | Kafka server - consumer group                                                           |
| `JWT_SECRET`           | `jwt.secret`           | `true`   | JWT - secret, key to decode jwt, must be the same across all services in an environment |
| `JWT_ISSUER`           | `jwt.issuer`           | `true`   | JWT - issuer, default `codrjs.com`                                                      |

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
