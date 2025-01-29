import { Router } from 'express';
import { registerUser, login } from '../controllers/users';

const router = Router();

router.post('/register', registerUser);
router.post('/login', login);

export default router;
