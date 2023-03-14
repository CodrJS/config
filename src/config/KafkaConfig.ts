export const KafkaConfig: {
  consumer: { group: string };
} = {
  consumer: { group: process.env.KAFKA_CONSUMER_GROUP as string },
};
