const mongoose =require('mongoose');
const genresSchema =require('../schema/genresSchema');

const genreModel = mongoose.model('Genre',genresSchema );


module.exports = genreModel;