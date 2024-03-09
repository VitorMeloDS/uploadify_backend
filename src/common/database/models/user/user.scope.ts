import { DefaultScopeGetter } from 'sequelize-typescript';

/**
 * Escopo padrão para a tabela usuario.
 */
export const UserDefaultScope: DefaultScopeGetter = () => ({
  attributes: ['id', 'nome', 'email']
});
