import express  from 'express';
import { UserController } from './controller/user.controller';
import { VisitController } from './controller/visit.controller';

export function getRouter() {
  const router = express.Router();

  const userController = new UserController;

  router.get('/users', userController.getAll);
  router.get('/user/:id', userController.getOne);
  router.post('/user', userController.create);
  router.put('/user', userController.update);
  router.delete('/user/:id', userController.delete);

  const visitController = new VisitController();

  router.get('/visit', visitController.getAll);
  router.post('/visit', visitController.create);
  router.get('/visit/:tajNumber', visitController.visitOfUser)

  return router;
}
