import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import jwt from 'jsonwebtoken';

const app = express();

const mongoUrl = "mongodb+srv://Chamika:wdcn2002@cluster0.lhdcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,{});
const connection = mongoose.connection;

connection.once("open",()=>
{
    console.log("Database connected");
})

app.use(bodyParser.json());

app.use(
    (req,res,next)=>{
        const token = req.header("Authorization")?.replace("Bearer ","");
        console.log(token);

        if(token != null){
            jwt.verify(token,"cbc-secret-key-7973",
                (error,decoded)=>{
                    if(!error){
                       // console.log(decoded);
                        req.user = decoded
                    }
                }
            )
        }
        next();
    }
)

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);

app.listen(
    5000,
    ()=>{
        console.log("Server is running on port 5000");
    }
)