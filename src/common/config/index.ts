import { Environment } from '../../core/interfaces/environment';
import { EnvironmentConfig } from './config';

export class Configuration {
  private static readonly _env = new EnvironmentConfig().getEnvironmentVariables();

  public static get env(): Environment {
    return this._env;
  }
}
