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
    .sort()
    .map(
      m =>
        [m.replace(/npm_package_dependencies_/g, ""), process.env[m]] as [
          string,
          string,
        ],
    )
    .map(
      m =>
        [
          m[0].split("_").reduce((acc, curr, idx) => {
            if (curr === "") acc += "@";
            else if (idx === 0) acc += curr;
            else if (idx === 1 && acc === "@") acc += `${curr}/`;
            else if (idx >= 1 && !/@\w+\//g.test(acc)) acc += `-${curr}`;
            else acc += curr;
            return acc;
          }, ""),
          m[1],
        ] as string[],
    )
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>),
  yarnVersion: process.env.YARN_VERSION as string,
};
