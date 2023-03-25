export const AWSConfig: {
  region: string;
  ses: {
    api: {
      version: string;
    };
    access: {
      key: string;
      secret: string;
    };
  };
} = {
  region: process.env.AWS_REGION as string,
  ses: {
    api: {
      version: process.env.AWS_SES_API_VERSION as string,
    },
    access: {
      key: process.env.AWS_SES_ACCESS_KEY as string,
      secret: process.env.AWS_SES_ACCESS_SECRET as string,
    },
  },
};
