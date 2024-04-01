const ErrorHandler = require("../utils/ErrorHander");

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //wrong mongodb Id Error
    if (err.name === "CastError"){
        const message = `Resource not found. Invalid:${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success:false,
        //error:err.stack,
        message:err.message,
    })
    

}