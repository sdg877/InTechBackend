import express from 'express';
import { create, login, update } from '../controllers/users.js';

const router = express.Router();

router.post('/', create);
router.post('/login', login);
router.put('/:id', update);

export default router;