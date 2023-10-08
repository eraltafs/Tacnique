const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware for authentication
const authenticate = (req, res, next) => {
  const token = req.cookies.token||req.headers.authenticate; // token from the request headers

  try {
    if (token) {
      // Verify the token using the JWT secret key from environment variables
      jwt.verify(token, process.env.jwtkey, (err, decoded) => {
        if (decoded) {
          req.user = decoded;
          next(); // Move to the next function
        } else {
          console.log(err);
          res.status(403).send("You are not authorized"); 
        }
      });
    } else {
        // if no token 
      res.status(401).send("Please login"); 
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error"); // Server Error for unexpected errors
  }
};

module.exports = { authenticate };
