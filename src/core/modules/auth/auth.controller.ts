import { Request, Response, NextFunction } from 'express';
import { HttpHandler, HttpStatus } from '@helpers';
import { isUserAuth } from 'src/core/interfaces/user';
import { HttpBadRequest } from 'src/common/helpers/http.exception';
import { AuthService } from './auth.service';

export class AuthController {
  @HttpHandler(HttpStatus.OK)
  public static async auth(req: Request, _res: Response, _next: NextFunction) {
    const post = req.body;
    if (!isUserAuth(post)) throw new HttpBadRequest();
    return await AuthService.auth(post);
  }
}
