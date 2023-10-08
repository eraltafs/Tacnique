const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 25, 
    message: "Too many requests from this IP, please try again after .",
});

module.exports = {limiter}