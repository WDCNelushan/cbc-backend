import User from "../models/user.js";

export function CreateUser(req,res){

    const user = new User(req.body)

    user.save().then(
        ()=>{
            res.json({
                message: "User created"
            })
            
        }).catch(()=>{
            res.json({
                message: "User not created"
            })
        })
    
}