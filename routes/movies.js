const express = require('express');
const router = express.Router();
const Genre = require('../model/genreModel');
const Movie = require('../model/moviesModel');

router.post('/', async (req,res)=>{
    try{
        const {title , numberInStock , dailyRentalRate} = req.body
        const genre = await Genre.findById(req.body.genreId);
        if(!genre){
            return res.status(404).send('Invalid genre')
        }
        const movie = new Movie({title , genre:{ _id: genre._id , name:genre.name}, numberInStock ,dailyRentalRate})
        await movie.save();
        res.send(movie)
    }catch(err){
        res.status(404).send(err.message)
    }
   
})

router.get('/', async(req,res)=>{
    const movie =await Movie.find({}).sort({name:1});
    res.send(movie);
})

router.get('/:id' ,async(req,res)=>{
    try{
        const {id} =req.params;
    const movie =await Movie.findById(id);
    if(!movie){
        return res.status(404).send("movie not found")
    }
    res.send(movie)
    }catch(err){
        res.status(404).send(err.message)
    }
    
})
 router.put('/edit/:id', async (req,res)=>{
    try{
        const {id} =req.params;
        const genre = Genre.findById(req.body.genreId)
        if(!genre){
            return res.status(404).send('Invalid genre')
        }
        const {title , numberInStock , dailyRentalRate} = req.body
        const movie = await Movie.findByIdAndUpdate( id,
        {title , genre:{ _id: genre._id , name:genre.name}, numberInStock ,dailyRentalRate} )
        if(!movie){
            return res.status(404).send("movie not found")
        }
        res.send(movie);
    }catch(err){
        res.status(500).send(err.message)
    }

 })
router.delete('/del/:id',async (req,res)=>{
    try{
        const {id}= req.params;
        const movie =await Movie.findByIdAndDelete(id);
        res.send('deleted');
    }catch(err){
        res.status(500).send(err.message)
    }
    
})
module.exports =router;