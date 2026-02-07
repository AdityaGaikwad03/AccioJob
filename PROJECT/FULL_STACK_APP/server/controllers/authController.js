import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import createError from '../utils/createError.js'

export const register = async(req, res, next) => {
    try{

        const hash = bcrypt.hashSync(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password: hash
        })
        // const newUser = new User({
        //     username: 'test',
        //     email: "test",
        //     password: "test",
        //     country: "test"
        // })
        await newUser.save()

        res.status(201).send("User hass been created")

    }catch(err){
        // res.status(500).send(err.message)
        next(err)
    }
}
export const login = async(req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});

        // if(!user) return res.status(404).send("user nor found");

        // const err = new Error();
        // err.message = "User does not exist"

        if(!user) return next(createError(404, "user does not found"))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        // if(!isCorrect) return res.status(404).send("wrong passward or username")
         if(!isCorrect) return next(createError(404, "wrong passward or username"))
        
        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        },process.env.JWT_SECRET)


        const {password, ...info} = user._doc
        res.cookie("accessToken", token).status(200).send(info)

    }catch(err){
        // res.status(500).send(err.message)
        next(err)
    }
}