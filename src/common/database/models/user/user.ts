import { UserAttributes, UserCreationAttributes } from './user.interface';
import { UserDefaultScope, UserScopes } from './user.scope';
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  DefaultScope,
  Scopes,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';

@DefaultScope(UserDefaultScope)
@Scopes(UserScopes)
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
