import express from 'express';
import compoundRouter from './compounds/compoundRouter';

const rootRouter = express.Router();
const apiRouter = express.Router();

rootRouter.use('/api', apiRouter);

apiRouter.use('/compounds', compoundRouter);

export default rootRouter;
