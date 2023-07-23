import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

//Minhas rotas
router.post('/newuser', UserController.usersCreate);
router.get('/user/:id/addAge', UserController.addAge);
router.get('/user/:id/subtractAge', UserController.subtractAge);
router.get('/user/:id/delete', UserController.deleteUser)

export default router;