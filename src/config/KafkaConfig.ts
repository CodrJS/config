export const KafkaConfig: {
  brokers: string;
  clientId: string;
  consumer: { group: string };
} = {
  brokers: process.env.KAFKA_BROKERS as string,
  clientId: process.env.KAFKA_CLIENT_ID as string,
  consumer: { group: process.env.KAFKA_CONSUMER_GROUP as string },
};
