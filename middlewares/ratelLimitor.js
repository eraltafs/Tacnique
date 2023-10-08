const rateLimit = require("express-rate-limit");

// Configure rate limiting for API requests
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 25, // Limit each IP to 25 requests per windowMs
  message: "Too many requests from this IP, please try again later.", // Error message for exceeding the limit
});

module.exports = { limiter };
