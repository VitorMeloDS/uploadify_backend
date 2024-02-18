import { Request, Response } from 'express';

export class AuthController {
  public static async login(req: Request, res: Response): Promise<any> {
    return res.send({ message: 'login' }).status(200);
  }
}
