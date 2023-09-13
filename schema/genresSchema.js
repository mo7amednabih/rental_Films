const mongoose =require('mongoose');
const genresSchema= new mongoose.Schema({
    name:{
        type : String,
        required: true,
        minlength:3
    }
})

module.exports = genresSchema;