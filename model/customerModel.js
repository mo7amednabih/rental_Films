const mongoose = require('mongoose')
const customerSchema = require('../schema/customerSchema')

const customerModel = mongoose.model ('customer', customerSchema)

module.exports =customerModel;