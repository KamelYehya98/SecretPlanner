import Router from 'express';
import * as places from '../controllers/placesController.js'
import * as validators from '../validators/placesValidators.js'
import { checkUser } from '../middleware/authMiddleware.js';

const placesRouter = Router();

placesRouter.post('/api/places', checkUser, validators.createPlaceValidator, places._createPlaceController);
placesRouter.put('/api/places/:id', checkUser, validators.createPlaceValidator, places._editPlaceController);
placesRouter.get('/api/places', checkUser, places._getPlacesController);
placesRouter.get('/api/places/:id', checkUser, places._getPlaceByIdController);
placesRouter.delete('/api/places/:id', checkUser, places._deletePlaceController);

export default placesRouter;