export const MonogoConfig: {
  uri: string;
} = {
  uri: process.env.MONGO_URI as string,
};
