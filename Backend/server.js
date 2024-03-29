const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js")


// config
dotenv.config({path:"Backend/config/config.env"});

//connectDatabase
connectDatabase()



app.listen(process.env.PORT,()=>(

    console.log(`server is working on http://localhost:${process.env.PORT}`)
))