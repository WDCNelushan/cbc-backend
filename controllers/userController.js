import User from "../models/user.js";
import bcrypt from 'bcrypt';

export function CreateUser(req,res){

    const newUserData = new User(req.body);
    newUserData.password = bcrypt.hashSync(newUserData.password,10);
    const user = new User(newUserData);

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