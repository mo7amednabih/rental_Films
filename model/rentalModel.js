const mongoose = require('mongoose')
const rentalSchema =require('../schema/rentalSchema')

const rentalModel =mongoose.model('Rental',rentalSchema)

module.exports =rentalModel;