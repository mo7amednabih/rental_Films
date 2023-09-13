const express= require('express');
const router =express.Router();
//const asyncMiddleware = require('../middleware/catch')
const Genre = require('../model/genreModel');
const {authorized ,adminauthorized} =require('../middleware/middleware')





router.post('/' , authorized, async (req, res) =>{
 
    try{
        const { name } = req.body;
        const genre= new Genre({ name })
          await genre.save();
         res.send(genre);
    }catch(err){
        res.status(500).send(err.message)
    }
  
})

router.get('/' , async (req,res) =>{
   
     const genres = await Genre.find({}).sort({name:1})
    res.send(genres);
})



router.get('/:id', async(req,res) =>{
    const {id}=req.params
    const genre= await Genre.findById(id)
    if(!genre) return res.status(404).send("the movie not found")

    res.send(genre);
})

router.put('/edit/:id' ,async(req,res)=>{
    const {id} =req.params;
    const genre= await Genre.findById(id)
    if(!genre) return res.status(404).send("the movie not found")
    const { name } =req.body
    genre.name =name;


    await genre.save();

    res.send(genre);
})

router.delete('/del/:id',adminauthorized, async(req,res)=>{
   
    const {id} =req.params;
    const genre= await Genre.findByIdAndDelete(id)
    if(!genre) return res.status(404).send("the movie not found")

   res.send("deleted");
})

module.exports=router;