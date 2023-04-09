export interface IOpenAPIServer {
  host: string;
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
    title: process.env.OPENAPI_TITLE as string,
    description: process.env.OPENAPI_DESC as string,
  },
  servers: [
    {
      host: process.env.OPENAPI_SERVER_ONE_HOST as string,
      description: process.env.OPENAPI_SERVER_ONE_DESC as string,
    },
    {
      host: process.env.OPENAPI_SERVER_TWO_HOST as string,
      description: process.env.OPENAPI_SERVER_TWO_DESC as string,
    },
    {
      host: process.env.OPENAPI_SERVER_THREE_HOST as string,
      description: process.env.OPENAPI_SERVER_THREE_DESC as string,
    },
    {
      host: process.env.OPENAPI_SERVER_FOUR_HOST as string,
      description: process.env.OPENAPI_SERVER_FOUR_DESC as string,
    },
    {
      host: process.env.OPENAPI_SERVER_FIVE_HOST as string,
      description: process.env.OPENAPI_SERVER_FIVE_DESC as string,
    },
  ],
};
