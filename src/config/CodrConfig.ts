export const CodrConfig: {
  svc: {
    user: {
      user: string;
      profile: string;
      session: string;
      auth: string;
    };
  };
} = {
  svc: {
    user: {
      auth: process.env.CODR_USER_AUTH_SVC_URL as string,
      profile: process.env.CODR_USER_PROFILE_SVC_URL as string,
      session: process.env.CODR_USER_SESSION_SVC_URL as string,
      user: process.env.CODR_USER_USER_SVC_URL as string,
    },
  },
};
