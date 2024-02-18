import { env } from './env';
import { Environment } from '../../core/interfaces/environment';

export class EnvironmentConfig {
  private checkUndefined(key: string, object: any): void {
    if (typeof object === 'undefined') {
      throw { message: `A variável ${key} não foi definida` };
    }

    if (!(typeof object === 'boolean') && !object) {
      throw { message: `A variável ${key} não foi definida` };
    }

    if (typeof object === 'object') {
      for (const deepKey of Object.keys(object)) {
        this.checkUndefined(key.concat('.', deepKey), object[deepKey]);
      }
    }
  }

  public getEnvironmentVariables(): Environment {
    for (const key of Object.keys(env)) {
      this.checkUndefined(key, env[key]);
    }
    return env as Environment;
  }
}
