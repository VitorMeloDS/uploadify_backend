import 'dotenv/config';

export const env: any = {
  api: {
    port: Number(process.env.API_PORT),
    node: process.env.NODE_ENV
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
