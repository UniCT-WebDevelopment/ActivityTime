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
    
});


router.post("/activities", (req, res) => {
    var query_getAllUserActivity = "SELECT id, title, description, date, time_start, time_end, city, address,cod_founder,type FROM users JOIN usrXact ON users.email = usrXact.cod_usr JOIN Activities ON usrXact.cod_act = Activities.id WHERE usrXact.cod_usr = ? ORDER BY time_start ASC";
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
    var query_getAllUserActivityFounder = "SELECT id, title, description, date, time_start, time_end, city, address,cod_founder,type FROM Activities WHERE cod_founder = ?  ORDER BY time_start";
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
    var query_getAllNotificationsUser= "SELECT id, type, cod_sender, cod_activity,status_notification,activity_title,date,time_start,time_end, name, surname FROM Notifications JOIN users ON users.email = notifications.cod_sender WHERE Notifications.cod_usr = ? ORDER BY notifications.type";
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
            notifications.push({"id":result[x].id,"type":result[x].type,"cod_sender":result[x].cod_sender,"name_sender":result[x].name,"surname_sender":result[x].surname,"cod_activity":result[x].cod_activity,"status_notification":result[x].status_notification,"activity_title":result[x].activity_title,"date":result[x].date,"time_start":result[x].time_start,"time_end":result[x].time_end})
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
    var query_getAllNotificationsUser= "SELECT id, type, cod_sender, cod_activity, activity_title,date,time_start,time_end, name, surname,email,status_notification FROM Notifications JOIN users ON users.email = notifications.cod_usr WHERE Notifications.cod_sender = ? ORDER BY notifications.type";
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
            notifications.push({"id":result[x].id,"type":result[x].type,"email_recipient":result[x].email,"name_recipient":result[x].name,"surname_recipient":result[x].surname,"cod_activity":result[x].cod_activity,"status_notification":result[x].status_notification,"activity_title":result[x].activity_title,"date":result[x].date,"time_start":result[x].time_start,"time_end":result[x].time_end})
            x = x+1
        }
        if(x==0) {
            res.send({ resp: "EMPTY" })
            return
        }  
        
        if(x>0){res.send({ resp: { "inProgressNotifications": notifications} });}
    });
})

router.post("/AddActivity", (req, res) => {
    var query_AddNewActivity = "INSERT INTO `Activities` (`title`, `description`, `date`, `time_start`, `time_end`, `city`, `address`, `cod_founder`, `type`) VALUES ?"
    
    console.log("/api/AddActivity triggered");
    console.log(req.body.title)
    console.log(req.body.description)
    console.log(req.body.date)
    console.log(req.body.timeStart)
    console.log(req.body.timeEnd)
    console.log(req.body.city)
    console.log(req.body.address)
    console.log(req.body.type)
    console.log(req.body.codFounder)
    console.log(req.body.inviteFriend)
    
    
    if (req.body.title == undefined || req.body.title == "" || req.body.date == undefined || req.body.date == "" || req.body.city == undefined || req.body.city == "" || req.body.address == undefined || req.body.address == "" || req.body.timeStart == undefined || req.body.timeStart == "" || req.body.codFounder == undefined || req.body.codFounder == "" || req.body.type == undefined || req.body.type == "" ) {
        res.send({ resp: "DENY" })
        return
    }
    let dateS = req.body.date + "T22:12:12.000Z"
    let date = new Date(dateS)
    console.log(date)
    var values = [  
        [req.body.title, req.body.description, req.body.date, req.body.timeStart,req.body.timeEnd,req.body.city,req.body.address,req.body.codFounder,req.body.type]
    ];  
    
    con.query(query_AddNewActivity, [values], async function (err, result, fields) {
        if (err) {
            console.log(err)
            res.send({ resp: "ERR" })
            return
        }

        let inserted_id = result.insertId;
        if(req.body.inviteFriend != undefined){
            console.log("c'è una lista degli invitati")
            invitateFriendList = JSON.parse(req.body.inviteFriend)
            console.log(invitateFriendList)
            
            
            for(let email of invitateFriendList){
                console.log("invitato: "+ email)
                await sendNotifiationAsync(req.body.codFounder,email,inserted_id,req.body.title,req.body.date,req.body.timeStart,req.body.timeEnd)
            }
            
            
            res.send({"resp":"OK"})

        }
        else{
            console.log("non c'è una lista degli invitati")
            res.send({"resp":"OK"})
        }
        
    });
   
})

router.post("/userForFriend", (req, res) => {
    var query_getAllUserForFriend= "SELECT name, surname, email, url_photo FROM users WHERE ";
    var x = 0;
    var friend = []

    console.log("/api/userForFriend triggered");
    if (req.body.searchString == undefined || req.body.searchString == "") {
        res.send({ resp: "DENY" })
        return
    }
    let stringLikeSplitted = String(req.body.searchString).split(" ");
    let stringLike = ""
    console.log(stringLikeSplitted)
    let y = stringLikeSplitted.length
    for(let str of stringLikeSplitted){
        stringLike += " users.name LIKE '%"+str+"%' "+ " or users.surname LIKE "+" '%"+str+"%'" + " or users.email LIKE "+" '%"+str+"%'";
        if(y > 1){
            stringLike += " or "
            y--;
        }
    }
   
    query_getAllUserForFriend += stringLike
    console.log(query_getAllUserForFriend)
    con.query(query_getAllUserForFriend, async function (err, result, fields) {
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

router.post("/sendNotification", (req, res) => {
    var query_AddNewNotification = "INSERT INTO `Notifications` (`type`, `cod_usr`, `cod_sender`, `cod_activity`, `status_notification`,`activity_title`,`date`,`time_start`,`time_end`) VALUES ?"
    
    console.log("/api/sendNotification triggered");
    console.log(req.body.type)
    console.log(req.body.cod_usr)
    console.log(req.body.cod_sender)
    console.log(req.body.cod_activity)
    console.log(req.body.status_notification)
    console.log(req.body.activity_title)
    
    
    if (req.body.type == undefined || req.body.type == "" || req.body.cod_usr == undefined || req.body.cod_usr == "" || req.body.cod_sender == undefined || req.body.cod_sender == "") {
        res.send({ resp: "DENY" })
        return
    }
    
    var values = [  
        [req.body.type, req.body.cod_usr, req.body.cod_sender, req.body.cod_activity,req.body.status_notification,req.body.activity_title,req.body.date,req.body.time_start,req.body.time_end]
    ];  
    console.log("------ Provo la query")
    con.query(query_AddNewNotification, [values], async function (err, result, fields) {
        console.log("------ Dentro la query")
        if (err) {
            console.log(err)
            res.send({ resp: "ERR" })
            return
        }
        res.send({"resp":"OK"})
    });
   
})

async function sendNotifiationAsync(sender,email,codActivity,titleActivity,date,time_start,time_end){
    var query_AddNewNotification = "INSERT INTO `Notifications` (`type`, `cod_usr`, `cod_sender`, `cod_activity`, `status_notification`,`activity_title`,`date`,`time_start`,`time_end`) VALUES ?"
    const promise =  new Promise((resolve,reject) => {
        var values = [  
            ["invite_request", email, sender, codActivity,"N",titleActivity,date,time_start,time_end]
        ];  
        con.query(query_AddNewNotification, [values], async function (err, result, fields) {
            console.log("------ Dentro la query")
            if (err) {
                console.log(err)
                return
            } 
            resolve()
                
        });
    });
    return await promise
}

router.post("/addFriend", (req, res) => {
    var query_AddNewFriend = "INSERT INTO `Friendlist` (`cod_usr`, `cod_friend`) VALUES ?"
    
    console.log("/api/addFriend triggered");
    console.log(req.body.cod_usr)
    console.log(req.body.cod_friend)
    
    
    
    if (req.body.cod_usr == undefined || req.body.cod_usr == "" || req.body.cod_friend == undefined || req.body.cod_friend == "") {
        res.send({ resp: "DENY" })
        return
    }
    
    var values = [  
        [req.body.cod_usr, req.body.cod_friend]
    ];  
    console.log("------ Provo la query")
    con.query(query_AddNewFriend, [values], async function (err, result, fields) {
        console.log("------ Dentro la query")
        if (err) {
            console.log(err)
            res.send({ resp: "ERR" })
            return
        }
        values = [  
            [req.body.cod_friend, req.body.cod_usr]
        ];  
        con.query(query_AddNewFriend, [values], async function (err, result, fields) {
            if (err) {
                console.log(err)
                res.send({ resp: "ERR" })
                return
            }
            res.send({"resp":"OK"})
        });
        
    });
})

router.post("/addActivityPartecipant", (req, res) => {
    var query_AddNewActivityPartecipant = "INSERT INTO `usrXact` (`cod_usr`, `cod_act`,`status`) VALUES ?"
    
    console.log("/api/addActivityPartecipant triggered");
    console.log(req.body.cod_usr)
    console.log(req.body.cod_act)
    console.log(req.body.status)
    
    
    
    if (req.body.cod_usr == undefined || req.body.cod_usr == "" || req.body.cod_act == undefined || req.body.cod_act == "" || req.body.status == undefined || req.body.status == "") {
        res.send({ resp: "DENY" })
        return
    }
    
    var values = [  
        [req.body.cod_usr, req.body.cod_act, req.body.status]
    ];  
    console.log("------ Provo la query")
    con.query(query_AddNewActivityPartecipant, [values], async function (err, result, fields) {
        console.log("------ Dentro la query")
        if (err) {
            console.log(err)
            res.send({ resp: "ERR" })
            return
        }
        res.send({"resp":"OK"})
    });
})

router.post("/deleteNotification", (req, res) => {
    var query_DeleteNotification = "DELETE FROM `Notifications` WHERE Notifications.id = ?";
    
    console.log("/api/deleteNotification triggered");
    console.log(req.body.id)
    
    
    
    if (req.body.id == undefined || req.body.id == "") {
        res.send({ resp: "DENY" })
        return
    }
    
    console.log("------ Provo la query")
    con.query(query_DeleteNotification, [req.body.id], async function (err, result, fields) {
        console.log("------ Dentro la query")
        if (err) {
            console.log(err)
            res.send({ resp: "ERR" })
            return
        }
        res.send({"resp":"OK"})
    });
})

router.post("/allActivitiesForZone", (req, res) => {
    var query_getAllActivityForZone = "SELECT id, title, description, date, time_start, time_end, city, address,cod_founder,type FROM Activities WHERE Activities.type = 'P' and Activities.date >= CURDATE() and Activities.city LIKE ";
    var x = 0;
    var activities = []

    console.log("/api/allActivitiesForZone triggered");
    if (req.body.searchString == undefined || req.body.searchString == "") {
        res.send({ resp: "DENY" })
        return
    }
    let stringLike = " '"+req.body.searchString+"%'";
    let orderByCondition = " ORDER BY activities.date ASC, activities.time_start ASC, activities.title"
    query_getAllActivityForZone += stringLike + orderByCondition;
    console.log(query_getAllActivityForZone)
    con.query(query_getAllActivityForZone, async function (err, result, fields) {
        if (err) {
            console.log(err)
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






module.exports = router;