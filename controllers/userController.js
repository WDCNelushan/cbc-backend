import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function CreateUser(req,res){

    const newUserData = req.body;

    if(newUserData.type == 'admin'){

        if(req.user == null){
            res.json({
                message : "Please login as administrator to create admin accounts"
            })
            return
        }

        if(req.user.type != 'admin'){
            res.json({
                message : "Please login as administrator to create admin accounts"
            })
            return
        }
    }

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

                    const token = jwt.sign({
                        email : user.email,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        isBlocked : user.isBlocked,
                        type : user.type,
                        profilePicture : user.profilePicture
                    }, process.env.SECRET)

                    res.json({
                        message : "User logged in",
                        token : token
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

export async function getUser(req,res){
    try{
        const usersList = await User.find()
        res.json({
            list : usersList
        })
    } catch (error){
        res.json({
            message : "Can not get users",
            error: error.message
        })
    }
}


export function isAdmin(req){

    if(req.user == null){
        return false;
    }

    if(req.user.type != "admin"){
        return false;
    }

    return true;
}

export function isCustomer(req){

    if(req.user == null){
        return false;
    }

    if(req.user.type != "customer"){
        return false;
    }

    return true;
}

