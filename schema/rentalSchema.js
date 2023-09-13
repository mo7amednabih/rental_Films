const  Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
    customer :{
        type : new mongoose.Schema({
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
        }),
        required : true
    },
    movie:{
        type: new mongoose.Schema({
            title: {
                type : String,
                trim: true,
                required : true,
                minlength : 5,
                maxlength : 50
            },
            dailyRentalRate :  {
                type:  Number,
                required : true,
                min: 0
              },
        }),
        required:true
    },
    dateOut:{
        type:Date,
        default:Date.now
    },
    dateReturned:{
        type:Number,
     },
     rentalFee:{
        type:Number,
        min:0
     }
})
/*
function validateRental(rental){
    const schema ={
        customerId : Joi.objectId().required(),
        movieId : Joi.objectId().required()
    };

    return Joi.validate(rental , schema);
}
*/
module.exports = rentalSchema;