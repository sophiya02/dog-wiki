const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../error/badRequest");

const errorHandler = (err, req, res, next) => {
  console.log("inside error handler");

  // handle other types of errors
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, please try again later",
  };
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
