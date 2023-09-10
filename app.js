const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
dotenv.config();


//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

.then (()=> console.log (" Database connection successful!"))
.catch(err => console.log(err));

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//set view engine
app.use("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));