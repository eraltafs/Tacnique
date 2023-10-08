const logger = require("../utils/logger");

const log_data = (req, res, next) => {
  let timestamp = new Date();
  const logData = {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    timestamp,
  };

  // Log the request using the Winston logger
  logger.info(
    `[${logData.timestamp}] Method:${logData.method} URL:${logData.url} from ${logData.ip}`
  );

  next();
};

module.exports = { log_data };
