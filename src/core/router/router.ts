import { routerAuth } from './router.auth';
import { Router } from 'express';

const router: Router = Router();

router.get('/auth', routerAuth);

export const routerControl: Router = router;
