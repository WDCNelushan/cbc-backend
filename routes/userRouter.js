import express from 'express';
import { CreateUser, loginUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/",CreateUser);
userRouter.post("/login",loginUser);

export default userRouter;