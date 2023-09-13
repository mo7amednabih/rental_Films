
const mongoose =require('mongoose');
const genresSchema = require('./genresSchema')

const moviesSchema = new mongoose.Schema({
    title: {
        type : String,
        trim: true,
        required : true,
        minlength : 5,
        maxlength : 50
    },
    genre: {
        type : genresSchema,
        required : true
    },
    numberInStock: {
      type:  Number,
      required : true,
      min: 0
    },
    dailyRentalRate :  {
        type:  Number,
        required : true,
        min: 0
      },
})

module.exports = moviesSchema;