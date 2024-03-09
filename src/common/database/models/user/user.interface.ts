import { Optional } from 'sequelize/types';

/**
 * Atributos da tabela usuario.
 */
export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

/**
 * Atributos de criacao da tabela usuario.
 */
export type UserCreationAttributes = Optional<UserAttributes, 'id'>;
