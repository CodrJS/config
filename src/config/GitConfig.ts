export const GitConfig: {
  ref: string;
  commit: { sha: string; timestamp?: string };
  repo: string;
  workflow: {
    sha: string;
  }
} = {
  ref: process.env.GIT_REF as string,
  commit: {
    sha: process.env.GIT_COMMIT_SHA as string,
    timestamp: process.env.GIT_COMMIT_TIME,
  },
  repo: process.env.GIT_REPO as string,
  workflow: {
    sha: process.env.GIT_WORKFLOW_SHA as string,
  },
};
