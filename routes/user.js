const User=require('../model/userModel')
const bcrypt =require('bcrypt')
const express =require('express')
const router =express.Router();
const {authorized} =require('../middleware/middleware')

router.get('/me',authorized,async(req,res)=>{
    const user= await User.findById(req.user._id);
    res.send(user)
})

router.post('/',async (req,res)=>{
    const {name ,email ,password,isAdmin}=req.body;
    let user = await User.findOne({email})
    if(user) return res.status(404).send("the email is already register")

    const newuser= new User({name ,email ,password,isAdmin})
    const salt = await bcrypt.genSalt(10);
    newuser.password = await bcrypt.hash(newuser.password ,salt)
    await newuser.save();

    const token = newuser.generateToken();
    res.header('x-auth-token',token).send(newuser)
})

module.exports =router