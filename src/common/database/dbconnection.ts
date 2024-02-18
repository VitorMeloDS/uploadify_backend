import { DataSource } from 'typeorm';
import 'reflect-metadata';

export class DBConnection {
  private static appDataSource: DataSource;

  public static async conn() {
    if (DBConnection.appDataSource) return DBConnection.appDataSource;

    const AppDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jyottrrgdkqxiqvqjxxh',
      password: '2$q&u$Y8%ju&#PxVo!',
      database: 'test',
      entities: [],
      migrations: [],
      synchronize: true,
      logging: false
    });

    return AppDataSource.initialize();
  }
}
