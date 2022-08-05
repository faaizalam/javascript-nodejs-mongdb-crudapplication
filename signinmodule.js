
import mongoose from "mongoose";



const UserSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    isAdmin:{type:Boolean,default:false}

},{timeStamp:true})

const User= mongoose.model('User',UserSchema)
export default User;