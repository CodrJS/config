export const JWTConfig: {
  algorithm: string;
  issuer: string;
  secret: string;
} = {
  algorithm: process.env.JWT_ALGORITHM as string,
  issuer: process.env.JWT_ISSUER as string,
  secret: process.env.JWT_SECRET as string,
};
