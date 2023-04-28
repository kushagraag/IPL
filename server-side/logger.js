const winston = require('winston');

const logger = winston.createLogger({
  level: 'infoPointsTable',
  format: winston.format.json(),
  defaultMeta: { service: 'pointsTable' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log', level: 'info' })
  ]
});

module.exports = logger;
