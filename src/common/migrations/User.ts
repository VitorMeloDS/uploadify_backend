import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'User',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            length: '120'
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255'
          },
          {
            name: 'createdAt',
            type: 'Date',
            default: Date.now()
          },
          {
            name: 'updatedAt',
            type: 'Date'
          }
        ]
      }),
      true
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('User');
  }
}
