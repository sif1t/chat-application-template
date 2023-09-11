//external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal import
 const {notFoundHandler, errorHandler} = require("./middlewares/common/errorhandler");


const app = express();
dotenv.config();

 //mongoose connet
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
       useUnifiedTopology: true,
       useNewUrlParser: true,
    })
    .then(() => console.log("database connection successful!"))
    .catch((err) => console.log(err));


// mongoose.connect(process.env.MONGO_CONNECTION_STRING, {

//     useUnifiedTopology: true,

//     useNewUrlParser: true,

// })
// .then(console.log('connect sucess to mongodb'))

   

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup



// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);



app.listen(process.env.PORT, () => {
    console.log(`app listning to port ${process.env.PORT}`);
});
