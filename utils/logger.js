const { createLogger, format, transports } = require('winston');

// Winston logger instance
const logger = createLogger({
  level: 'info', 
  format: format.combine(
    format.json() 
  ),
  transports: [
    // Configure a transport, where to write logs to a file
    new transports.File({ filename: 'api-logs.log' }),
  ],
});

module.exports = logger;