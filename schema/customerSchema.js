const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : {
       type: String,
        required :true,
        minlength :5
    },
    phone :{
        type:String,
        required: true
    },
    isGold :{
        type:Boolean,
        default :false
    }
})

module.exports =customerSchema;