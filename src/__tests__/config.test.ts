import config from "../config";

describe("Codr config", () => {
  test("environment", () => {
    expect(config.env).toBe("dev");
  });

  test("express", () => {
    expect(config.express.host).toBe("0.0.0.0");
    expect(config.express.port).toBe("3000");
  });

  test("jsonwebtoken", () => {
    expect(config.jwt.issuer).toBe("codrjs.com");
    expect(config.jwt.secret).toBe("jwt-secret");
  });
  
  test("kafka", () => {
    expect(config.kafka.consumer.group).toBe("codr.service.test");
  });
  
  test("mongo", () => {
    expect(config.mongo.uri).toBe("mongodb+srv://localhost/codr?replicaSet=mongodb&ssl=false");
  });
});
