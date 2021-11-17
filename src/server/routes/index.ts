import * as express from 'express';
import userRouter from './users';
import chirpsRouter from './chirps';

const router = express.Router()

router.use('/users', userRouter);
router.use('/chirps', chirpsRouter);

export default router