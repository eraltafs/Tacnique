const { Router } = require("express");

// Import the controller functions 
const { user_register, user_login } = require("../controller/user.conroller");

const userRouter = Router(); //  Express router 

// Define routes 
userRouter.post("/register", user_register); // Route for user registration
userRouter.post("/login", user_login); // Route for user login

module.exports = { userRouter }; // Export the user router
