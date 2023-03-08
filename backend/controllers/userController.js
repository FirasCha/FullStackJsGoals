//@desc REGISTER NEW USER
//@route POST /api/users
//@access Public
const registerUser = (req, res) => {
    res.json({message : 'Register user'})
}

//@desc AUthenticate a USER
//@route POST /api/users/login
//@access Public
const loginUser = (req, res) => {
    res.json({message : 'login user'})
}

//@desc GET USER DATA
//@route GET /api/users/me
//@access Public
const getMe = (req, res) => {
    res.json({message : 'User data display'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}