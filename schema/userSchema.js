const mongoose = require("mongoose");
const jwt =require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    name:{
        type :String,
        required:true,
        minlength: 5
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    isAdmin:{
        type :Boolean,
        default :false
    }
})
userSchema.methods.generateToken= function(){
const token = jwt.sign({_id : this._id,isAdmin:this.isAdmin}, "PrivateKey");
return token;
}
module.exports =userSchema;

