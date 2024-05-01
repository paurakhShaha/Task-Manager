
const {CustomError} = require('../error/customError');
const errorHandlerMiddleware = (err, req, res, next) => {

  if(err instanceof CustomError){
    return res.status(err.statusCode).send({error: err.message});
  }
  return res.send({error: err.message}).status(500);

}

module.exports = errorHandlerMiddleware;