import express  from 'express';
import { Controller } from './controller/base.controller';

export function getRouter() {
  const router = express.Router();

  const userController = new Controller;

  router.get('/user', userController.getAll);
  router.get('/user/:id', userController.getOne);
  router.post('/user', userController.create);
  router.put('/user', userController.update);
  router.delete('/user/:id', userController.delete);

  return router;
}
