import { Router } from 'express';
import UserController from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/', UserController.create);

usersRouter.get('/:username', UserController.execute);

export default usersRouter;
