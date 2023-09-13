const express =require('express')
const router =express.Router()
const User=require('../model/userModel')
const bcrypt =require('bcrypt')
const jwt= require('jsonwebtoken')
const config = require('config')
router.post('/',async(req,res)=>{
    const{email } =req.body;
    const user =await User.findOne({email});
    if(!user) return res.status(404).send("invalid password or email")

    const pass = await bcrypt.compare(req.body.password ,user.password)
    if(!pass) return res.status(404).send("invalid password or email")
s
    const token = user.generateToken()
    res.send(token)
})

module.exports =router