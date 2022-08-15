const port = 9000;
const { application } = require("express");
const express = require("express");
const server = express();
server.use(express.static("/Users/alessio/Documents/ProgettoWeb/ActivityTime/Backend/activity-time"));
server.set('view engine','pug')
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*') 
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next();
});
server.use(express.urlencoded({extended: true,}));
server.use(express.json())

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
var delay = async function (req, res, next) {
    console.log("delay start")
    await pause(70)
    next()    
}
server.use(delay)

//router-registration
const routerRegistration = require("./routers/registration-router")
server.use("/api",routerRegistration)

//router-login
const routerLogin = require("./routers/login-router")
server.use("/api",routerLogin)

//router-validation-token
const routerValidationToken= require("./routers/validationToken-router")
server.use("/api",routerValidationToken)

//router-data-user
const routerDataUser= require("./routers/user-data.routes")
server.use("/api",routerDataUser)

//angular-application
const routerAngularApplication= require("./resources-router")
server.use("/",routerAngularApplication)


server.listen(port, () => {
    console.log("server listen on port "+ port + "...")
});
