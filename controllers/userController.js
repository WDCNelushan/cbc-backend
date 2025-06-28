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

export function loginUser(req,res){

    User.find({email:req.body.email}).then(
        (users)=>{
            if(users.length == 0){
                res.json({
                    message : "User not found"
                })
            }else{
                const user = users[0]

                const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password)

                if(isPasswordCorrect){
                    res.json({
                        message : "User logged in"
                    })
                }else{
                    res.json({
                        message : "Password is incorrect"
                    })
                }
            }
        }
    )
}