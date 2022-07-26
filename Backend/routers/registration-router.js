const { application } = require("express");
const express = require("express");
const router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ActivityTime"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

router.post("/registration",(req,res) => {
    console.log("/api/registration triggered");
    if(req.body.name == undefined || req.body.name == ""){
        res.send({resp:"DENY"})
        return
    }
    if(req.body.surname == undefined || req.body.surname == ""){
        res.send({resp:"DENY"})
        return
    }
    if(req.body.email == undefined || req.body.email == ""){
        res.send({resp:"DENY"})
        return
    }
    if(req.body.password == undefined || req.body.password == ""){
        res.send({resp:"DENY"})
        return
    }
    var sql = "INSERT INTO Users (email, name, surname, password,url_photo) VALUES (?, ?, ?, ?, ?)"
    con.query(sql, [req.body.email , req.body.name, req.body.surname, req.body.password, "none"],function (err, result) {
        if (err){
            res.send({resp:"DENY"})
        }

        else{
            console.log("Result: " + result);
            res.send({resp:"OK"})
        }
        
    });
})

module.exports = router;