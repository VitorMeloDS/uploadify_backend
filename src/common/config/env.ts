import 'dotenv/config';

export const env: any = {
  api: {
    port: Number(process.env.API_PORT),
    node: process.env.NODE_ENV,
    secretKey: process.env.API_SECRET_KEY,
    secretKeyRefresh: process.env.API_SECRET_KEY_REFRESH,
    expiresAccessToken: process.env.API_EXPIRES_ACCESS_TOKEN,
    expiresRefreshToken: process.env.API_EXPIRES_REFRESH_TOKEN
  },
  database: {
    name: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL,
    driver: process.env.DB_DRIVER
  }
};
