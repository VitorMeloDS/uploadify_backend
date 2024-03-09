import { routerAuth } from './auth.router';
import { routerUser } from './user.router';
import { Router } from 'express';

const router: Router = Router();

router.use('/auth', routerAuth);
router.use('/user', routerUser);

export const routerControl: Router = router;
