import Router from 'express';
import * as costumes from '../controllers/costumesController.js'
import * as validators from '../validators/costumesValidator.js'
import { checkUser } from '../middleware/authMiddleware.js';

const costumesRouter = Router();

costumesRouter.post('/api/costumes', checkUser, validators.createCostumeValidator, costumes._createCostumeController);
costumesRouter.get('/api/costumes', checkUser, costumes._getCostumesController);
costumesRouter.delete('/api/costumes/:id', checkUser, costumes._deleteCostumeController);

export default costumesRouter;