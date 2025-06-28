import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
    type:{
        type: String,
        default: "customer"
    },
    profilePicture:{
        type: String,
        default: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png"
    }

})

const User = mongoose.model("users",userSchema)

export default User;