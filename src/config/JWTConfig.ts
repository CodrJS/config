export const JWTConfig: {
  issuer: string;
  secret: string;
} = {
  issuer: process.env.JWT_ISSUER as string,
  secret: process.env.JWT_SECRET as string,
};
