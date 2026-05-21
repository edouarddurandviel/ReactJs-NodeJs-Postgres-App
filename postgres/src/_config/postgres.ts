export default {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  db: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PW,
  postgres: {
    development: {
      username: "root",
      password: null,
      database: "database_development",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "postgres"
    }
  }
};
