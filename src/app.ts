import { routerControl } from './core/router/router';
import express, { Express } from 'express';
import { Configuration } from '@config';
import 'reflect-metadata';
import cors from 'cors';
import { Database } from './common/database/dbconnection';

export class AppListenner {
  private static readonly app: Express = express();
  private static readonly port: number = Configuration.env.api.port;

  private static configResponse(): void {
    AppListenner.app.use(express.urlencoded({ extended: false }));
    AppListenner.app.use(express.json());
  }

  private static configCors(): void {
    AppListenner.app.use(cors());
  }

  private static router(): void {
    AppListenner.app.use('/api', routerControl);
  }

  public static async listen(): Promise<void> {
    try {
      AppListenner.configResponse();
      AppListenner.configCors();
      AppListenner.router();
      await Database.createConnection();

      AppListenner.app.listen(AppListenner.port, (): void => {
        console.log(`Server starde in port ${AppListenner.port}`);
      });
    } catch (error) {
      throw new Error(AppListenner.name + ' ' + error);
    }
  }
}
