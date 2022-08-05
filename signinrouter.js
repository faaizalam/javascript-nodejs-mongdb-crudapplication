import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import User from './signinmodule.js';
import Datauser from './userauth.js';
import { generateToken } from './utils.js';
import bcrypt from 'bcryptjs'
const Routersig=express.Router();

  Routersig.get('/signinadmin',async(req,res)=>{
    const ressig=await User.insertMany(Datauser.User)
    // const ressig=await User.remove({})
  
    res.send(ressig)


  })

  
Routersig.post('/end',(async(req,res)=>{
    const user =  await User.findOne({email:req.body.email})
    if (user) {
      // if (bcrypt.compareSync(req.body.password,user.password)) {
        if(bcrypt.compareSync(req.body.password,user.password)){
       res.send({
          _id:user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token:generateToken(user)
        })
        return
      }
    }
    res.status(401).send({message:'invalid user or password'})     
    
    

}))


Routersig.post('/register',expressAsyncHandler(async(req,res)=>{
  const newuser=  new User({
    name:req.body.name,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password,8),

  })
 const user= await newuser.save()
 res.send({
  _id:user._id,
  name:user.name,
  email:user.email,
  token:generateToken(user)
 })




}))






export default Routersig;