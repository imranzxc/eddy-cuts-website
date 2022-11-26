import Router from 'express'
import UserController from '../controllers/users.controller.js';
import { registerValidation, loginValidation } from '../validations.js';
import { handleValidationErrors, checkAuth } from '../utils/index.js';

const router = new Router()

router.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
router.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
router.get('/auth/me', checkAuth, UserController.getMe);

export default router;