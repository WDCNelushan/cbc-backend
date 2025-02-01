import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true
    },
    firstName:{
        type : String,
        required : true,
    },
    lastName:{
        type : String,
        required : true,
    },
    password:{
            type : String,
            required : true,
    },
    isBlocked:{
        type : Boolean,
        default: false
    },
    type:{
        type: String,
        default: "Customer"
    },
    profilePicture : {
        type : String,
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fuser%2F&psig=AOvVaw1ICZMF4fScQa7aIRV-isDZ&ust=1734431183920000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICrxOqJrIoDFQAAAAAdAAAAABAE"
    }
})

const User = mongoose.model("users",userSchema)

export default User;