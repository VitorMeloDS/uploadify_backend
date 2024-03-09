import { Dialect } from 'sequelize/types';

export interface Environment {
  api: {
    port: number;
    node: string;
  };
  database: {
    name: string;
    schema: string;
    host: string;
    port: number;
    user: string;
    password: string;
    ssl: string;
    driver: Dialect;
  };
}
