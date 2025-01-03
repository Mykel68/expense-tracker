import express from 'express';
import { registerUser, loginUser, verifyName } from '../controllers/auth.controller';
import { verify_X_API_KEY } from '../middleware/auth';

const router = express.Router();

router.post('/register', verify_X_API_KEY, registerUser);
router.post('/login', verify_X_API_KEY, loginUser);
router.post('/verifyName', verify_X_API_KEY, verifyName);

export default router;
