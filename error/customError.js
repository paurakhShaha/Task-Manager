
class CustomError extends Error{
constructor(message, statusCode){
  super(message);
  this.statusCode = statusCode;
}}

const createCustomError = (message, statusCode) => {
  new CustomError(message, statusCode);}

  module.exports = {createCustomError, CustomError};