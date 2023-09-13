const movies = require('../routes/movies')
const genres =require('../routes/genres');
const customer = require('../routes/customer')
const rental =require('../routes/rental')
const user =require('../routes/user')
const auth =require('../routes/auth')
const error =require('../middleware/handleError')
const express = require('express');
module.exports = function(app){
    app.use(express.json());
    app.use('/genres' , genres);
    app.use('/customer' , customer);
    app.use('/movies', movies)
    app.use('/rental', rental)
    app.use('/user',user)
    app.use('/auth',auth)
    app.use(error)
}