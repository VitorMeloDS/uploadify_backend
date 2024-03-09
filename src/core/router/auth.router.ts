import { Request, Response, Router } from 'express';

const router: Router = Router();

router.post('/login', async (_req: Request, res: Response) => {
  return res.send({ message: 'rota em construção!' });
});

export const routerAuth: Router = router;
