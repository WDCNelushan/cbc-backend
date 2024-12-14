import express from 'express';
import {getStudent,createStudent,deleteStudent} from "../controllers/studentController.js";

//create student router
const studentRouter = express.Router();

studentRouter.get("/",getStudent)

/*studentRouter.get("/",(req,res)=>{
    console.log("This is a get request for student router")
    res.json({
        message: "This is a get request for student router"
    })
})*/

studentRouter.post("/",createStudent)

/*studentRouter.post("/",(req,res)=>{
    console.log("This is a post request for student router")
    res.json({
        message: "This is a post request for student router"
    })
})
*/
studentRouter.delete("/",deleteStudent)
export default studentRouter;