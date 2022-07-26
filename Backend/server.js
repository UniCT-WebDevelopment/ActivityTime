const port = 9000;
const { application } = require("express");
const express = require("express");
const server = express();
server.use(express.static("/Users/alessio/Documents/ProgettoWeb/ActivityTime/Backend/activity-time"));
server.set('view engine','pug')
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*') 
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next();
});
server.use(express.urlencoded({extended: true,}));
server.use(express.json())

//router-registration
const routerRegistration = require("./routers/registration-router")
server.use("/api",routerRegistration)

server.listen(port, () => {
    console.log("server listen on port "+ port + "...")
});
