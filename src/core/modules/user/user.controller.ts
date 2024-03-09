import { NextFunction, Request, Response } from 'express';
import { User } from '@models';
import bcrypt from 'bcrypt';

export class UserController {
  /**
   * Trata os dados da requisição e responta para criação de usuário
   * @param { Request } _req - Objeto com as informações da requisição do Express;
   * @param { Response } res - Objeto com as informações da resposta do Express;
   * @param { NextFunction } _next - Função para passar para o próximo passo do Express;
   */
  public static async create(_req: Request, res: Response, _next: NextFunction) {
    try {
      const password = bcrypt.hashSync(
        '12345678',
        bcrypt.genSaltSync(Math.floor(Math.random() * 20))
      );
      const user = await User.create({
        name: 'usuario.teste',
        email: 'vmsvitor20@gmail.com',
        password
      });

      return res.send(user).status(201);
    } catch (error) {
      console.log(error);
      return res.send(error).status(500);
    }
  }
}
