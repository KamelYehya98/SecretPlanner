import Router from 'express';
import * as authController from '../controllers/authController.js'
import * as validators from '../validators/authValidator.js'

const authRouter = Router();

authRouter.post('/api/auth/login', validators._loginUserValidator, authController._loginUserController);

export default authRouter;