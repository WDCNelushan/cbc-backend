import express from 'express';
import { CreateUser, getUser, loginUser } from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post("/",CreateUser);
userRouter.get("/",getUser);
userRouter.post("/login",loginUser);

export default userRouter;