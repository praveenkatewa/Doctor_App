const JWT = require('jsonwebtoken');

// auth middleware


module.exports=async (req,res,next)=>{
   try{
    const token = req.headers.authorization.split(" ")[1];
    JWT.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                success:false,
                message:'Unauthorized access'
            })
        }else{
            req.body.userId = decoded.id;
            next();
        }
    })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Auth Middleware error'
        })
        
   }
}