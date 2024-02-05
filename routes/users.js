import express from 'express';
import { create, login, update } from '../controllers/users.js';
import usersCtrl from '../controllers/users.js';
import ensureLoggedIn from '../config/ensureLoggedIn.js';

const router = express.Router();

router.get('/check-token', ensureLoggedIn,usersCtrl.checkToken);

router.post('/', create);
router.post('/login', login);
router.put('/:id', update);

export default router;