const jwt =require('jsonwebtoken');

const authorized = async(req,res,next)=>{
    const token =req.header('authorization')
    if(!token){
        return res.status(401).send('Access denied. No token process')
    }
    try{
        const decoded = await jwt.verify(token ,'PrivateKey')
        req.user=decoded;
        next();
    }catch(err){
        res.status(500).send(err.message)
    }
}
const adminauthorized =async (req,res,next)=>{
    const token =req.header('authorization')
    if(!token)   return res.status(401).send('Access denied. No token process')
    try{
        decoded = await jwt.verify(token , 'PrivateKey')
        if(!decoded.isAdmin )  return res.status(401).send('the user not admin')

        next();
    }catch(err){
        res.status(500).send(err.message)
    }
}
module.exports ={authorized ,adminauthorized}