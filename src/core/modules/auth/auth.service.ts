import { HttpUnauthorized } from '@helpers';
import { Configuration } from '@config';
import { UserAuth } from '@interfaces';
import { User } from '@models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthService {
  public static async auth(post: UserAuth) {
    const _user = await User.scope('fullUser').findOne({ where: { email: post.email } });
    if (!_user) throw new HttpUnauthorized();
    if (!bcrypt.compareSync(post.password, _user.password)) throw new HttpUnauthorized();
    const user = await User.findOne({ where: { email: post.email } });
    if (!user) throw new HttpUnauthorized();
    const dataUser = user.get();
    const token = jwt.sign(dataUser, Configuration.env.api.secretKey, {
      expiresIn: Configuration.env.api.expiresAccessToken
    });
    const refreshToken = jwt.sign(dataUser, Configuration.env.api.secretKeyRefresh, {
      expiresIn: Configuration.env.api.expiresRefreshToken
    });
    return { token, refreshToken };
  }
}
