const express = require("express");
const router = express.Router();

router.get("*", (req,res) => {
    res.sendFile("/Users/alessio/Documents/ProgettoWeb/ActivityTime/Backend/activity-time/index.html");
});


