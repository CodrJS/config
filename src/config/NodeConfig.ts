export const NodeConfig: {
  env: "production" | "developement" | "testing";
  version: string;
  modules: Record<string, string>;
  yarnVersion: string;
} = {
  env: process.env.NODE_ENV as "production" | "developement" | "testing",
  version: process.env.NODE_VERSION as string,
  modules: Object.keys(process.env)
    .filter(m => /npm_package_dependencies_/g.test(m))
    .map(m => [m, process.env[m]] as [string, string])
    .map(m => [m[0].replace(/npm_package_dependencies_/g, ""), m[1]])
    .map(
      m =>
        [
          m[0]
            .split("_")
            .map((p, idx) =>
              p === ""
                ? "@"
                : idx === m[0].split("_").length - 1 &&
                  m[0].split("_").length !== 1
                ? `/${p}`
                : p,
            )
            .join(""),
          m[1],
        ] as string[],
    )
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>),
  yarnVersion: process.env.YARN_VERSION as string,
};
