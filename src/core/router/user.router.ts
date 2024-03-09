import { Router } from 'express';
import { UserController } from '@modules';

const router: Router = Router();

router.get('/create-user', UserController.create);

export const routerUser: Router = router;
