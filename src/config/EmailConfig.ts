export const EmailConfig: {
  from: string;
  replyTo: string;
} = {
  from: process.env.EMAIL_FROM as string,
  replyTo: process.env.EMAIL_REPLY_TO as string,
};
