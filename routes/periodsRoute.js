import Router from 'express';
import * as periods from '../controllers/periodsController.js'
import * as validators from '../validators/periodsValidator.js'
import { checkUser } from '../middleware/authMiddleware.js';

const periodsRouter = Router();

periodsRouter.post('/api/periods', checkUser, validators.createPeriodsValidator, periods._createPeriodController);
periodsRouter.get('/api/periods', checkUser, periods._getPeriodsController);

export default periodsRouter;