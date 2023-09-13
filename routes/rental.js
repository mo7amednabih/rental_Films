const express =require('express');
const router =express.Router();
const Rental= require('../model/rentalModel');
const Movie = require('../model/moviesModel');
const Customer =require('../model/customerModel');
//const { validateRental } = require('../schema/rentalSchema');
const mongoose =require('mongoose')


router.post('/',async (req,res)=>{
    if (!mongoose.Types.ObjectId.isValid(req.body.customerId)) {
        return res.status(400).json({ message: 'Invalid objectId format for customer' });
      }
    
      if (!mongoose.Types.ObjectId.isValid(req.body.movieId)) {
        return res.status(400).json({ message: 'Invalid objectId format for movie' });
      }
    const customer = await Customer.findById(req.body.customerId);
   
    if(!customer){
        return res.status(404).send('Invalid Customer')
    }
    const movie =await Movie.findById(req.body.movieId);
    if(!movie){
        return res.status(404).send('Invalid Movie')
    }
    if(movie.numberInStock ===0){
        return res.status(404).send('movie not in the Stock')
    }
    const { dateOut , dateReturned , rentalFee} =req.body
    const rental = new Rental({
        customer:{_id:customer._id ,name:customer.name , phone : customer.phone , isGold :customer.isGold},
        movie :{_id:movie._id ,title:movie.title , dailyRentalRate :movie.dailyRentalRate },
        dateOut , dateReturned , rentalFee
    })

    await rental.save();
    movie.numberInStock--;
    await movie.save()
    res.send(rental);
})
router.get('/',async (req,res)=>{
    const rental = await Rental.find({}).sort({dateOut : -1})
    res.send(rental);
})

module.exports = router;