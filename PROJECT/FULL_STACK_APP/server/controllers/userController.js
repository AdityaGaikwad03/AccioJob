import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import createError from "../utils/createError.js";

const deleteUser = async(req, res, next) => {
    
    const user = await User.findById(req.params.id);
    console.log(user)

    console.log("req.userId",req.userId)
    console.log("user._id.toString()",user._id.toString())
    console.log("req.isSeller",req.isSeller)

    if(req.userId !== user._id.toString()){
        // return res.status(403).send("You can delete only your account")
        return next(createError(403, "You can delete only your account"))
    }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("deleted");
}

export default deleteUser