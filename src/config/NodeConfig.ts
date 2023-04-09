export const NodeConfig: {
  env: "production" | "developement" | "testing";
  version: string;
  modules: string[];
  yarnVersion: string;
} = {
  env: process.env.NODE_ENV as "production" | "developement" | "testing",
  version: process.env.NODE_VERSION as string,
  modules: Object.keys(process.env)
    .filter(m => /npm_package_dependencies_/g.test(m))
    .map(m => m.replace(/npm_package_dependencies_/g, ""))
    .map(m =>
      m
        .split("_")
        .map((p, idx) =>
          p === ""
            ? "@"
            : idx === m.split("_").length - 1 && m.split("_").length !== 1
            ? `/${p}`
            : p,
        )
        .join(""),
    ),
  yarnVersion: process.env.YARN_VERSION as string,
};
