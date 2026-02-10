import jwt from 'jsonwebtoken'
import createError from '../utils/createError.js';

const verifyToken = (req,res,next) =>{
    const token = req.cookies.accessToken;
    console.log(token)
    // if(!token) return res.status(401).send("you are not a authenticated");
    if(!token) return next(createError(401, "you are not a authenticated"))

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        // if(err) return req.status(403).send("token is not valid")
        if(err) return next(createError(403, "token is not valid"))
            
        req.userId = payload.id;
        req.isSeller = payload.isSeller;

        next();
    })
}

export default verifyToken