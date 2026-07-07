export default {
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    db: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PW
  },
  google: {
    bucket: process.env.GOOGLE_CLOUD_STORAGE
  },
  minio: {
    test: process.env.BUCKET
  },
  socket: {
    domain: process.env.WS_DOMAIN
  },
  remote: {
    domains: process.env.PUBLIC_AUTHORIZED_DOMAINS
  }
};
