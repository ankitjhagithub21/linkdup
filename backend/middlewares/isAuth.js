const jwt = require('jsonwebtoken')

const isAuth = async(req,res,next) => {
    try{
        const token = req.cookies.token;

    
        if(!token){
            return res.status(401).json({message:"Unauthorized.",success:false})   
        }
       
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({message:"Invalid token.",success:false})   
        }

        req.userId = decoded.id;

        next();

    }catch(error){
        console.log(error.message)
        res.status(401).json({message:"Unauthorized.",success:false})
    }
}

module.exports = isAuth