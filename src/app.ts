import { routerControl } from './core/router/router';
import express, { Express } from 'express';
import { Config } from './common/config';
import 'reflect-metadata';
import cors from 'cors';

export class AppListenner {
  private static readonly app: Express = express();
  private static readonly port: number = Config.env.api.port;

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

  public static listen(): void {
    AppListenner.configResponse();
    AppListenner.configCors();
    AppListenner.router();

    AppListenner.app.listen(AppListenner.port, (): void => {
      console.log(`Server starde in port ${AppListenner.port}`);
    });
  }
}
