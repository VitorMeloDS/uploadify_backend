import { EnvironmentConfig } from './config';
import { Environment } from '@interfaces';

export class Configuration {
  private static readonly _env = new EnvironmentConfig().getEnvironmentVariables();

  public static get env(): Environment {
    return this._env;
  }
}
