import Router from 'express';
import * as comments from '../controllers/commentsController.js'
import { checkUser } from '../middleware/authMiddleware.js';

const commentsRouter = Router();

commentsRouter.post('/api/comments', checkUser, comments._createCommentController);
commentsRouter.put('/api/comments/:id', checkUser, comments._editCommentController);
commentsRouter.get('/api/comments', checkUser, comments._getCommentsController);
commentsRouter.delete('/api/comments/:id', checkUser, comments._deleteCommentController);

export default commentsRouter;