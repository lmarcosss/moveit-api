import { Router } from 'express';
import experincesRoutes from './experiences.routes';

import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/experiences', experincesRoutes);

export default routes;