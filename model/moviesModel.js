const mongoose = require('mongoose')
const moviesSchema = require('../schema/moviesSchema')

const moviesModel = mongoose.model('Movies' , moviesSchema)

module.exports =moviesModel ;