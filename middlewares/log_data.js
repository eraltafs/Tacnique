const logger = require("../utils/logger");

// Middleware for logging API requests
const log_data = (req, res, next) => {
  let timestamp = new Date();
  const logData = {
    method: req.method,          // Get the HTTP method 
    url: req.originalUrl,        // Get the URL requested
    ip: req.ip,                  // Get the IP address
    timestamp,                   // Get the current timestamp
  };

  // Log the request using the Winston logger
  logger.info(
    `[${logData.timestamp}] Method:${logData.method} URL:${logData.url} from ${logData.ip}`
  );

  next(); // Move to the next function
};

module.exports = { log_data };
