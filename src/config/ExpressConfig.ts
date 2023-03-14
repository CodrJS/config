export const ExpressConfig: {
  host: string;
  port: string;
} = {
  host: process.env.EXPRESS_HOST as string,
  port: process.env.EXPRESS_PORT as string,
};
