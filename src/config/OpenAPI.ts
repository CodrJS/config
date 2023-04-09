export interface IOpenAPIServer {
  url: string;
  description: string;
}

export const OpenAPIConfig: {
  info: {
    title: string;
    description: string;
  };
  servers: [
    IOpenAPIServer,
    IOpenAPIServer,
    IOpenAPIServer,
    IOpenAPIServer,
    IOpenAPIServer,
  ];
} = {
  info: {
    title: process.env.OPENAPI_INFO_TITLE as string,
    description: process.env.OPENAPI_INFO_DESC as string,
  },
  servers: [
    {
      url: process.env.OPENAPI_SERVER_ONE_URL as string,
      description: process.env.OPENAPI_SERVER_ONE_DESC as string,
    },
    {
      url: process.env.OPENAPI_SERVER_TWO_URL as string,
      description: process.env.OPENAPI_SERVER_TWO_DESC as string,
    },
    {
      url: process.env.OPENAPI_SERVER_THREE_URL as string,
      description: process.env.OPENAPI_SERVER_THREE_DESC as string,
    },
    {
      url: process.env.OPENAPI_SERVER_FOUR_URL as string,
      description: process.env.OPENAPI_SERVER_FOUR_DESC as string,
    },
    {
      url: process.env.OPENAPI_SERVER_FIVE_URL as string,
      description: process.env.OPENAPI_SERVER_FIVE_DESC as string,
    },
  ],
};
