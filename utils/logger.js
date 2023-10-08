const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info', 
  format: format.combine(
    format.json() 
  ),
  transports: [
    new transports.File({ filename: 'api-logs.log' }),
  ],
});

module.exports = logger;