import express from 'express';
import { CreateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/",CreateUser);

export default userRouter;