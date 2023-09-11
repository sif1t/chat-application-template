//external imports
const express = require("express");

// internal imports
const {getInbox} = require("../controller/inboxController");


const router =  express.Router();


// inbox page
router.get("/", getInbox);

module.exports = router; 