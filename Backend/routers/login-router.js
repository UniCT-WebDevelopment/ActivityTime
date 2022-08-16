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


router.post("/login", (req, res) => {
  
    console.log("/api/login triggered");
    if (req.body.email == undefined || req.body.email == "") {
        res.send({ resp: "DENY" })
        return
    }
    if (req.body.password == undefined || req.body.password == "") {
        res.send({ resp: "DENY" })
        return
    }

    //Check Validation User
    var sql = "SELECT email, name, surname, password, url_photo FROM Users WHERE  Users.email = ? and Users.password = ?";
    console.log(req.body.email + " - " + req.body.password)

    con.query(sql, [req.body.email, req.body.password], function (err, result, fields) {
        if (err) {
            res.send({ resp: "ERR" })
        }

        if (result[0] != null) {

            var name = result[0].name;
            var surname = result[0].surname;
            var email = result[0].email;
            var password = result[0].password;
            var url_photo = result[0].url_photo;
            
            //Create Json Web Token

            let jwtSecretKey = "gfg_jwt_secret_key";
            let data = {
                email: email,
                password: password,
                time: Date()
            }
            token = jwt.sign(data, jwtSecretKey);
            res.send({ resp: { "name": name, "surname": surname, "email": email, "password": password, "url_photo": url_photo, "token": token } });

        }
        else {
            res.send({ resp: "DENY" })
        }

    });






})

router.get("/login-token", (req, res) => {
    
    console.log("/api/login-token triggered");
    let tokenHeaderKey = "Authorization";
    let jwtSecretKey = "gfg_jwt_secret_key";
    const token = jwt.decode(req.header(tokenHeaderKey),jwtSecretKey)
    if(token == undefined || token==null){
        res.send({ resp: "ERR" })
    }
    //Check Validation User
    var sql = "SELECT email, name, surname, password, url_photo FROM Users WHERE  Users.email = ? and Users.password = ?";
    console.log(token.email + " - " + token.password)

    con.query(sql, [token.email, token.password], function (err, result, fields) {
        if (err) {
            res.send({ resp: "ERR" })
        }

        if (result[0] != null) {

            var name = result[0].name;
            var surname = result[0].surname;
            var email = result[0].email;
            var password = result[0].password;
            var url_photo = result[0].url_photo;
            

            
            res.send({ resp: { "name": name, "surname": surname, "email": email, "password": password, "url_photo": url_photo, "token": jwt.sign(token,jwtSecretKey) } });

        }
        else {
            res.send({ resp: "DENY" })
        }

    });






})



module.exports = router;