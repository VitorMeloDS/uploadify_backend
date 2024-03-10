import { Router } from 'express';
import { AuthController } from '../modules/auth/auth.controller';

const router: Router = Router();

router.post('/login', AuthController.auth);

export const routerAuth: Router = router;
