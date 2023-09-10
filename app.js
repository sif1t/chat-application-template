const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();


//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

.then (()=> console.log (" Database connection successful!"))
.catch(err => console.log(err));