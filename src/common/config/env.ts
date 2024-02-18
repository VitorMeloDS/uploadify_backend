import 'dotenv/config';

export const env: any = {
  api: {
    port: Number(process.env.API_PORT)
  }
};
