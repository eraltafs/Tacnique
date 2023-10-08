const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

// User registration
const user_register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if a user with the same email already exists
  const user = await UserModel.findOne({ email });
  console.log(user);

  if (user) {
    return res.send({ msg: "User with this email already exists" });
  }

  try {
    // Hash the user's password before saving it to the database
    bcrypt.hash(password, 5, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
        return res.send({ msg: "User not created due to an error" });
      }
      if (hashedPassword) {
        // Create a new user with the hashed password
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send({ msg: "User created successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

// User login
const user_login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user with the provided email
  const user = await UserModel.findOne({ email });
  console.log(user);

  try {
    if (user) {
      // Compare the provided password with the hashed password stored in the database
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          // Create a JWT token for successful login
          const token = jwt.sign(
            { user_id: user._id, email, role: user.role },
            process.env.jwtkey
          );
          // Set the token as a cookie
          res.cookie("token", token, {
            httpOnly: true, // Make the cookie accessible only via HTTP
            secure: true, // Enable secure cookies (HTTPS)
          });

          return res.status(200).send({ msg: "Login success", token });
        } else {
          console.log(err);
          return res.status(401).send({ msg: "Wrong credentials" });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

module.exports = {
  user_register,
  user_login,
};
