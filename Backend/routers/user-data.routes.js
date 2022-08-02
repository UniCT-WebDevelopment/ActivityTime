const { application } = require("express");
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
//const { Activities } = require("../model/activity.model");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ActivityTime"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


router.post("/activities", (req, res) => {
    var query_getAllUserActivity = "SELECT id, title, description, date, time_start, time_end, city, address,cod_founder,type FROM users JOIN usrXact ON users.email = usrXact.cod_usr JOIN Activities ON usrXact.cod_act = Activities.id WHERE usrXact.cod_usr = ?";
    var x = 0;
    var activities = []

    console.log("/api/activities triggered");
    if (req.body.email == undefined || req.body.email == "") {
        res.send({ resp: "DENY" })
        return
    }

    
    con.query(query_getAllUserActivity, [req.body.email],  async function (err, result, fields) {
        if (err) {
            res.send({ resp: "ERR" })
            return
        }
        
        while(result[x] != null) {

            const activitiesFounderData = await getActivity(result[x].cod_founder)
            const activitiesPartecipantsData = await getPartecipantsForActivity(result[x].id)
            activities.push({"id":result[x].id,"title":result[x].title,"description":result[x].description,"date":result[x].date,"time_start":result[x].time_start,"time_end":result[x].time_end,"city":result[x].city,"address":result[x].address,"type":result[x].type,"founder":activitiesFounderData,"partecipants":activitiesPartecipantsData})
            x = x+1
            
        }
        if(x==0) {
            res.send({ resp: "EMPTY" })
            return
        }  
        
        if(x>0){res.send({ resp: { "activities": activities} });}
    });
})

router.post("/activitiesFounder", (req, res) => {
    var query_getAllUserActivityFounder = "SELECT id, title, description, date, time_start, time_end, city, address,cod_founder,type FROM Activities WHERE cod_founder = ?";
    var x = 0;
    var activities = []

    console.log("/api/activitiesFounder triggered");
    if (req.body.email == undefined || req.body.email == "") {
        res.send({ resp: "DENY" })
        return
    }

    
    con.query(query_getAllUserActivityFounder, [req.body.email],  async function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({ resp: "ERR" })
            return
        }
        console.log(result)
        
        while(result[x] != null) {

            const activitiesFounderData = await getActivity(result[x].cod_founder)
            const activitiesPartecipantsData = await getPartecipantsForActivity(result[x].id)
            activities.push({"id":result[x].id,"title":result[x].title,"description":result[x].description,"date":result[x].date,"time_start":result[x].time_start,"time_end":result[x].time_end,"city":result[x].city,"address":result[x].address,"type":result[x].type,"founder":activitiesFounderData,"partecipants":activitiesPartecipantsData})
            x = x+1
            
        }
        if(x==0) {
            res.send({ resp: "EMPTY" })
            return
        }  
        
        if(x>0){res.send({ resp: { "activities": activities} });}
    });
})

async function getActivity(cod_usr){
    var query_GetDataFounder = "SELECT email, name, surname,url_photo FROM users WHERE users.email = ?"
    const promise =  new Promise((resolve,reject) => {
        con.query(query_GetDataFounder, [cod_usr], function (err, result, fields) {
            console.log(result)
            if (err) {
                reject({ resp: "ERR" })
            }
            var usr = {"name":result[0].name,"surname":result[0].surname,"email":result[0].email,"url_photo":result[0].url_photo}    
            
            resolve(usr)
                
        });
        
    });
    return await promise
}

async function getPartecipantsForActivity(cod_act){
    var query_GetAllPartecipants = "SELECT email, name, surname, url_photo,status FROM users JOIN usrXact ON users.email = usrXact.cod_usr WHERE usrXact.cod_act = ?"
    const promise =  new Promise((resolve,reject) => {

        con.query(query_GetAllPartecipants, [cod_act], function (err, result, fields) {
            console.log(result)
            if (err) {
                reject({ resp: "ERR" })
            }
            var x = 0
            var partecipants = []
            
            while(result[x]!=null){
                partecipants.push({"name":result[x].name,"surname":result[x].surname,"email":result[x].email,"url_photo":result[x].url_photo,"status":result[x].status})
                x = x+1
            }
            
            
            resolve(partecipants)
                
        });
    });
    return await promise
}

router.post("/friends", (req, res) => {
    var query_getAllFriendUser= "SELECT name, surname, email, url_photo FROM Friendlist JOIN users ON users.email = Friendlist.cod_friend WHERE Friendlist.cod_usr = ?";
    var x = 0;
    var friend = []

    console.log("/api/friend triggered");
    if (req.body.email == undefined || req.body.email == "") {
        res.send({ resp: "DENY" })
        return
    }

    
    con.query(query_getAllFriendUser, [req.body.email],  async function (err, result, fields) {
        if (err) {
            res.send({ resp: "ERR" })
            return
        }
        
        while(result[x] != null) {
            friend.push({"name":result[x].name,"surname":result[x].surname,"email":result[x].email,"url_photo":result[x].url_photo})
            x = x+1
        }
        if(x==0) {
            res.send({ resp: "EMPTY" })
            return
        }  
        
        if(x>0){res.send({ resp: { "friendlist": friend} });}
    });
})

router.post("/newNotifications", (req, res) => {
    var query_getAllNotificationsUser= "SELECT id, type, cod_sender, cod_activity,status_notification, name, surname FROM Notifications JOIN users ON users.email = notifications.cod_sender WHERE Notifications.cod_usr = ?";
    var x = 0;
    var notifications = []

    console.log("/api/newNotifications triggered");
    if (req.body.email == undefined || req.body.email == "") {
        res.send({ resp: "DENY" })
        return
    }

    
    con.query(query_getAllNotificationsUser, [req.body.email],  async function (err, result, fields) {
        if (err) {
            res.send({ resp: "ERR" })
            return
        }
        
        while(result[x] != null) {
            notifications.push({"id":result[x].id,"type":result[x].type,"cod_sender":result[x].cod_sender,"name_sender":result[x].name,"surname_sender":result[x].surname,"cod_activity":result[x].cod_activity,"status_notification":result[x].status_notification})
            x = x+1
        }
        if(x==0) {
            res.send({ resp: "EMPTY" })
            return
        }  
        
        if(x>0){res.send({ resp: { "newNotifications": notifications} });}
    });
})

router.post("/inProgressNotifications", (req, res) => {
    var query_getAllNotificationsUser= "SELECT id, type, cod_sender, cod_activity, name, surname,email,status_notification FROM Notifications JOIN users ON users.email = notifications.cod_usr WHERE Notifications.cod_sender = ?";
    var x = 0;
    var notifications = []

    console.log("/api/inProgressNotifications triggered");
    if (req.body.email == undefined || req.body.email == "") {
        res.send({ resp: "DENY" })
        return
    }

    
    con.query(query_getAllNotificationsUser, [req.body.email],  async function (err, result, fields) {
        if (err) {
            res.send({ resp: "ERR" })
            return
        }
        
        while(result[x] != null) {
            notifications.push({"id":result[x].id,"type":result[x].type,"email_recipient":result[x].email,"name_recipient":result[x].name,"surname_recipient":result[x].surname,"cod_activity":result[x].cod_activity,"status_notification":result[x].status_notification})
            x = x+1
        }
        if(x==0) {
            res.send({ resp: "EMPTY" })
            return
        }  
        
        if(x>0){res.send({ resp: { "inProgressNotifications": notifications} });}
    });
})





module.exports = router;