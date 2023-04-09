export const GitConfig: {
  branch: string;
  commit: string;
  repo: string;
} = {
  branch: process.env.GIT_BRANCH as string,
  commit: process.env.GIT_COMMIT as string,
  repo: process.env.GIT_REPO as string,
};
