import { DefaultScopeGetter, ScopesOptionsGetter } from 'sequelize-typescript';

/**
 * Escopo padrão para a tabela usuario.
 */
export const UserDefaultScope: DefaultScopeGetter = () => ({
  attributes: ['id', 'name', 'email']
});

/**
 * Escopos adicionais para a tabela usuario.
 */
export const UserScopes: ScopesOptionsGetter = () => ({
  fullUser: {
    attributes: ['id', 'name', 'email', 'password']
  }
});
