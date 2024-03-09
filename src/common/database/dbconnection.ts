import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize/types';
import { Configuration } from '@config';
import { Models } from '@models';

export class Database {
  /** conexão com o banco. */
  private static readonly connection: Sequelize = new Sequelize({
    database: Configuration.env.database.name,
    schema: Configuration.env.database.schema,
    host: Configuration.env.database.host,
    port: Configuration.env.database.port,
    username: Configuration.env.database.user,
    password: Configuration.env.database.password,
    dialect: Configuration.env.database.driver,
    dialectOptions: {
      ssl: {
        require: Configuration.env.database.ssl
      }
    },
    pool: {
      max: 9,
      min: 3
    }
  });

  /**
   * Inicia uma transação.
   * @param callback - Função callback para a transação;
   */
  public static transaction<T>(callback: (t: Transaction) => Promise<T>): Promise<T> {
    return this.connection.transaction(callback);
  }

  /** Inicia a conexão com o banco. */
  public static async createConnection(): Promise<void> {
    this.connection.addModels(Models);
    await this.connection.authenticate();
    console.log(Database.name + ' Conexão com o PostgreSQL realizada!');
  }
}
