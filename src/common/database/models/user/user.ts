import { UserAttributes, UserCreationAttributes } from './user.interface';
import { UserDefaultScope } from './user.scope';
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  DefaultScope,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';

@DefaultScope(UserDefaultScope)
@Table({ tableName: 'usuario', timestamps: true })
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;
}
