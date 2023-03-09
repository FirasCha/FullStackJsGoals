const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
//@desc REGISTER NEW USER
//@route POST /api/users
//@access Public
const registerUser = asyncHandler( async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password)
    {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //CheckUserExist
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash password 
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc AUthenticate a USER
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler( async(req, res) => {
    res.json({message : 'login user'})
})

//@desc GET USER DATA
//@route GET /api/users/me
//@access Public
const getMe = asyncHandler( async(req, res) => {
    res.json({message : 'User data display'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}