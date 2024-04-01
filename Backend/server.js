const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js")

//Handeling Uncaught Error 
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled Uncaught Error`);
    process.exit(1);
})


// config
dotenv.config({ path: "Backend/config/config.env" });

//connectDatabase
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


//Unhandled Promise Rejection 
process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
})

