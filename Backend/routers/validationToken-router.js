const { application } = require("express");
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ActivityTime"
});

con.connect(function (err) {
    if (err) throw err;
    
});


router.get("/validation-token", (req, res) => {
    console.log("/api/validation-token triggered");
    
    let tokenHeaderKey = "Authorization";
    let jwtSecretKey = "gfg_jwt_secret_key";

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);

        if (verified) {
            res.send({ resp: "VALID" })
        }

        else {
            res.send({ resp: "INVALID" })

        }
    }
    catch (error) {
        // Access Denied
        res.send({ resp: "INVALID" })
    }
})    

module.exports = router;