const express =require('express');
const router = express.Router();

const cost =require('../model/customerModel');
const { Model } = require('mongoose');

router.post('/', async (req,res)=>{
    const { name , phone , isGold } = req.body
    const costu = new cost({ name , phone , isGold });
    await costu.save();
    res.send(costu)
})
router.get('/', async(req,res) =>{
    const costu = await cost.find({})
    res.send(costu)
})
router.get('/:id',async(req,res)=>{
    const {id}= req.params;
    const costu = await cost.findById(id)
    res.send(costu);
})
router.put('/edit/:id', async (req,res)=>{
    const {id}=req.params;
    const {name , phone ,isGold}= req.body;
    const costu = await cost.findByIdAndUpdate(id,
        {name,phone,isGold},
        {new:true}
        )
        res.send(costu)
})

router.delete('/del/:id', async (req,res)=>{
    const {id}=req.params;
    const costu =await cost.findByIdAndDelete(id);
    res.send('deletet')
})

module.exports =router