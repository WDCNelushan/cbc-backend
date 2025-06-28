import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';

const app = express();

const mongoUrl = "mongodb+srv://admin:1234@cluster0.tiegsxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{});
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Database connected")
})

app.use(bodyParser.json())

app.use("/api/users",userRouter);

app.listen(5000,
    ()=>{
        console.log("Server is running on port 5000")
        
    }
)