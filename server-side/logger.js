const winston = require('winston');

const logger = winston.createLogger({
  level: 'infoPointsTable',
  format: winston.format.json(),
  defaultMeta: { service: '' },
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

const setEndpointAsService = (req, res, next) => {
  const endpoint = req.url.split('/').pop();
  logger.defaultMeta.service = endpoint;
  next();
};

module.exports = { logger, setEndpointAsService };
