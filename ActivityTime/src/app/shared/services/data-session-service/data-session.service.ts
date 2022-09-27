import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activities } from '../../models/activities.model';
import { InProgressNotificationsModel, NewNotificationsModel } from '../../models/notifications.model';
import { UserFriend, UserPartecipant } from '../../models/user-friend.model';
import { User } from '../../models/user.model';
import { ApiService } from '../api-services/api.service';
import { LoadingService } from '../loading-services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class DataSessionService {
  user : User
  constructor(private apiService : ApiService, private loadingService : LoadingService) {
    this.user = null
  }
  setUser(user:User){
    this.user=user
  }
  getUser() : User{
    return this.user
  }

  async DBfetchUserWithoutToken(email:String,password:String):Promise<String | User>{
    return await new Promise((resolve,reject) => {
      
      this.loadingService.show()
          this.apiService.LoginAPI(email,password)
          .subscribe((response) => {
            if(response["resp"] == "DENY"){
              this.loadingService.hide()
              this.user = null
              reject("DENY")
              return
            }
            var userName  = response["resp"]["name"]
            var userSurname  = response["resp"]["surname"]
            var userEmail = response["resp"]["email"]
            var userPassword = response["resp"]["password"]
            var userUrl_photo = response["resp"]["url_photo"]
            
            localStorage.setItem("token",response["resp"]["token"])
            this.apiService.GetActivityAPI(userEmail).subscribe((response)=>{  
              
              var userActivities : Activities[] = []
              var i = 0
              if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                while(response["resp"]["activities"][i]){
                  let ID : Number = response["resp"]["activities"][i]["id"];
                  let title : String = response["resp"]["activities"][i]["title"];
                  let description : String = response["resp"]["activities"][i]["description"];
                  let date : Date = new Date(response["resp"]["activities"][i]["date"])
                  let timeStart : String = response["resp"]["activities"][i]["time_start"];
                  let timeEnd : String = response["resp"]["activities"][i]["time_end"];
                  let city : String = response["resp"]["activities"][i]["city"];
                  let address : String = response["resp"]["activities"][i]["address"];
                  let type : String = response["resp"]["activities"][i]["type"];
                  let founderName  = response["resp"]["activities"][i]["founder"]["name"]
                  let founderSurname  = response["resp"]["activities"][i]["founder"]["surname"]
                  let founderEmail = response["resp"]["activities"][i]["founder"]["email"]
                  let founderUrl_photo = response["resp"]["activities"][i]["founder"]["url_photo"]
                  let founder : UserFriend = new UserFriend(founderName,founderSurname,founderEmail,founderUrl_photo)
                  let partecipants : UserPartecipant[] = []
                  let j = 0
                  while(response["resp"]["activities"][i]["partecipants"][j]){
                    let name  = response["resp"]["activities"][i]["partecipants"][j]["name"]
                    let surname  = response["resp"]["activities"][i]["partecipants"][j]["surname"]
                    let email = response["resp"]["activities"][i]["partecipants"][j]["email"]
                    let status = response["resp"]["activities"][i]["partecipants"][j]["status"]
                    let url_photo = response["resp"]["activities"][i]["partecipants"][j]["url_photo"]
                    partecipants.push(new UserPartecipant(name,surname,email,url_photo,status))
                    j = j+1
                  }
                  
                  
                  userActivities.push(new Activities(ID,title,description,date,timeStart,timeEnd,city,address,founder,partecipants,type))
                  i=i+1
                }
              }
              

              this.apiService.GetFriendAPI(userEmail).subscribe((response) => {
                var userFriendList: UserFriend[] = []
                var i = 0
                if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                  while(response["resp"]["friendlist"][i]){
                    let name = response["resp"]["friendlist"][i]["name"]
                    let surname = response["resp"]["friendlist"][i]["surname"]
                    let email = response["resp"]["friendlist"][i]["email"]
                    let url_photo = response["resp"]["friendlist"][i]["url_photo"]
                    userFriendList.push(new UserFriend(name,surname,email,url_photo))
                    i = i+1
                  }
                }

                  this.apiService.GetNewNotificationsAPI(userEmail).subscribe((response) => {
                    
                    var userNewNotifications: NewNotificationsModel[] = []
                    var i = 0
                    if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                      while(response["resp"]["newNotifications"][i]){
                        let id = response["resp"]["newNotifications"][i]["id"]
                        let type = response["resp"]["newNotifications"][i]["type"]
                        let cod_sender = response["resp"]["newNotifications"][i]["cod_sender"]
                        let name_sender = response["resp"]["newNotifications"][i]["name_sender"]
                        let surname_sender = response["resp"]["newNotifications"][i]["surname_sender"]
                        let cod_activity = response["resp"]["newNotifications"][i]["cod_activity"]
                        let status_notification = response["resp"]["newNotifications"][i]["status_notification"]
                        let activity_title = response["resp"]["newNotifications"][i]["activity_title"]
                        let date  =  response["resp"]["newNotifications"][i]["date"]
                        let time_start = response["resp"]["newNotifications"][i]["time_start"]
                        let time_end = response["resp"]["newNotifications"][i]["time_end"]
                        userNewNotifications.push(new NewNotificationsModel(id,type,cod_sender,name_sender,surname_sender,cod_activity,status_notification,activity_title,date,time_start,time_end))
                        i = i+1
                      }
                    }
                    
                      this.apiService.GetInProgressNotificationsAPI(userEmail).subscribe((response) => {
                       
                        var userInProgressNotifications: InProgressNotificationsModel[] = []
                        var i = 0
                        if(response["resp"]!="EMPTY" && response["resp"]!="ERR"){
                          while(response["resp"]["inProgressNotifications"][i]){
                            let id = response["resp"]["inProgressNotifications"][i]["id"]
                            let type = response["resp"]["inProgressNotifications"][i]["type"]
                            let email_recipient = response["resp"]["inProgressNotifications"][i]["email_recipient"]
                            let name_recipient = response["resp"]["inProgressNotifications"][i]["name_recipient"]
                            let surname_recipient = response["resp"]["inProgressNotifications"][i]["surname_recipient"]
                            let cod_activity = response["resp"]["inProgressNotifications"][i]["cod_activity"]
                            let status_notification = response["resp"]["inProgressNotifications"][i]["status_notification"]
                            let activity_title = response["resp"]["inProgressNotifications"][i]["activity_title"]
                            let date = response["resp"]["inProgressNotifications"][i]["date"]
                            let time_start = response["resp"]["inProgressNotifications"][i]["time_start"]
                            let time_end = response["resp"]["inProgressNotifications"][i]["time_end"]
                            userInProgressNotifications.push(new InProgressNotificationsModel(id,type,email_recipient,name_recipient,surname_recipient,cod_activity,status_notification,activity_title,date,time_start,time_end))
                            i = i+1
                          }
                        }
                        this.apiService.GetActivityFounderAPI(userEmail).subscribe((response)=>{  
              
                          var userActivitiesFounder : Activities[] = []
                          var i = 0
                          if(response["resp"]!="EMPTY" && response["resp"]!="ERR"){
                            while(response["resp"]["activities"][i]){
                              let ID : Number = response["resp"]["activities"][i]["id"];
                              let title : String = response["resp"]["activities"][i]["title"];
                              let description : String = response["resp"]["activities"][i]["description"];
                              let date : Date = new Date(response["resp"]["activities"][i]["date"])
                              let timeStart : String = response["resp"]["activities"][i]["time_start"];
                              let timeEnd : String = response["resp"]["activities"][i]["time_end"];
                              let city : String = response["resp"]["activities"][i]["city"];
                              let address : String = response["resp"]["activities"][i]["address"];
                              let type : String = response["resp"]["activities"][i]["type"];
                              let founderName  = response["resp"]["activities"][i]["founder"]["name"]
                              let founderSurname  = response["resp"]["activities"][i]["founder"]["surname"]
                              let founderEmail = response["resp"]["activities"][i]["founder"]["email"]
                              let founderUrl_photo = response["resp"]["activities"][i]["founder"]["url_photo"]
                              let founder : UserFriend = new UserFriend(founderName,founderSurname,founderEmail,founderUrl_photo)
                              let partecipants : UserPartecipant[] = []
                              let j = 0
                              while(response["resp"]["activities"][i]["partecipants"][j]){
                                let name1  = response["resp"]["activities"][i]["partecipants"][j]["name"]
                                let surname1  = response["resp"]["activities"][i]["partecipants"][j]["surname"]
                                let email1 = response["resp"]["activities"][i]["partecipants"][j]["email"]
                                let url_photo1 = response["resp"]["activities"][i]["partecipants"][j]["url_photo"]
                                let status1 = response["resp"]["activities"][i]["partecipants"][j]["status"]
                                partecipants.push(new UserPartecipant(name1,surname1,email1,url_photo1,status1))
                                j = j+1
                              }
                              
                              
                              userActivitiesFounder.push(new Activities(ID,title,description,date,timeStart,timeEnd,city,address,founder,partecipants,type))
                              i=i+1
                            }
                          }
                          this.user = new User(userName,userSurname,userEmail,userPassword,userUrl_photo,userActivities,userActivitiesFounder,userFriendList,userNewNotifications,userInProgressNotifications)    
                          this.loadingService.hide()
                          resolve(this.user)
                          return
                      })
                      })
                  })
                
              })
            })
          })
    })
    
  }





  async DBfetchUserWithToken():Promise<String | User>{
    return await new Promise((resolve,reject) => {
      
    var token = localStorage.getItem("token");
    if(token != undefined) {
      this.loadingService.show()
      this.apiService.ValidationTokenAPI(token).subscribe((response)=>{
        if(response["resp"] == "VALID"){
          this.apiService.ValidationLoginState(token)
          .subscribe((response) => {
            var userName : String = response["resp"]["name"]
            var userSurname : String = response["resp"]["surname"]
            var userEmail : String = response["resp"]["email"]
            var userPassword : String = response["resp"]["password"]
            var userUrl_photo : String = response["resp"]["url_photo"]
            this.apiService.GetActivityAPI(userEmail).subscribe((response)=>{  
              
              var userActivities : Activities[] = []
              var i = 0
              if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                while(response["resp"]["activities"][i]){
                  let ID : Number = response["resp"]["activities"][i]["id"];
                  let title : String = response["resp"]["activities"][i]["title"];
                  let description : String = response["resp"]["activities"][i]["description"];
                  let date : Date = new Date(response["resp"]["activities"][i]["date"])
                  let timeStart : String = response["resp"]["activities"][i]["time_start"];
                  let timeEnd : String = response["resp"]["activities"][i]["time_end"];
                  let city : String = response["resp"]["activities"][i]["city"];
                  let address : String = response["resp"]["activities"][i]["address"];
                  let type : String = response["resp"]["activities"][i]["type"];
                  let founderName  = response["resp"]["activities"][i]["founder"]["name"]
                  let founderSurname  = response["resp"]["activities"][i]["founder"]["surname"]
                  let founderEmail = response["resp"]["activities"][i]["founder"]["email"]
                  let founderUrl_photo = response["resp"]["activities"][i]["founder"]["url_photo"]
                  let founder : UserFriend = new UserFriend(founderName,founderSurname,founderEmail,founderUrl_photo)
                  let partecipants : UserPartecipant[] = []
                  let j = 0
                  while(response["resp"]["activities"][i]["partecipants"][j]){
                    let name  = response["resp"]["activities"][i]["partecipants"][j]["name"]
                    let surname  = response["resp"]["activities"][i]["partecipants"][j]["surname"]
                    let email = response["resp"]["activities"][i]["partecipants"][j]["email"]
                    let url_photo = response["resp"]["activities"][i]["partecipants"][j]["url_photo"]
                    let status = response["resp"]["activities"][i]["partecipants"][j]["status"]
                    partecipants.push(new UserPartecipant(name,surname,email,url_photo,status))
                    j = j+1
                  }
                  
                  
                  userActivities.push(new Activities(ID,title,description,date,timeStart,timeEnd,city,address,founder,partecipants,type))
                  i=i+1
                }
              }
              
              
              this.apiService.GetFriendAPI(userEmail).subscribe((response) => {
                var userFriendList: UserFriend[] = []
                var i = 0
                if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                  while(response["resp"]["friendlist"][i]){
                    let name = response["resp"]["friendlist"][i]["name"]
                    let surname = response["resp"]["friendlist"][i]["surname"]
                    let email = response["resp"]["friendlist"][i]["email"]
                    let url_photo = response["resp"]["friendlist"][i]["url_photo"]
                    userFriendList.push(new UserFriend(name,surname,email,url_photo))
                    i = i+1
                  }
                }

                  this.apiService.GetNewNotificationsAPI(userEmail).subscribe((response) => {
                    
                    var userNewNotifications: NewNotificationsModel[] = []
                    var i = 0
                    if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                      while(response["resp"]["newNotifications"][i]){
                        let id = response["resp"]["newNotifications"][i]["id"]
                        let type = response["resp"]["newNotifications"][i]["type"]
                        let cod_sender = response["resp"]["newNotifications"][i]["cod_sender"]
                        let name_sender = response["resp"]["newNotifications"][i]["name_sender"]
                        let surname_sender = response["resp"]["newNotifications"][i]["surname_sender"]
                        let cod_activity = response["resp"]["newNotifications"][i]["cod_activity"]
                        let status_notification = response["resp"]["newNotifications"][i]["status_notification"]
                        let activity_title = response["resp"]["newNotifications"][i]["activity_title"]
                        let date = response["resp"]["newNotifications"][i]["date"]
                        let time_start = response["resp"]["newNotifications"][i]["time_start"]
                        let time_end = response["resp"]["newNotifications"][i]["time_end"]
                        userNewNotifications.push(new NewNotificationsModel(id,type,cod_sender,name_sender,surname_sender,cod_activity,status_notification,activity_title,date,time_start,time_end))
                        i = i+1
                      }
                    }
                    
                      this.apiService.GetInProgressNotificationsAPI(userEmail).subscribe((response) => {
                       
                        var userInProgressNotifications: InProgressNotificationsModel[] = []
                        var i = 0
                        if(response["resp"]!="EMPTY" && response["resp"]!="ERR"){
                          while(response["resp"]["inProgressNotifications"][i]){
                            let id = response["resp"]["inProgressNotifications"][i]["id"]
                            let type = response["resp"]["inProgressNotifications"][i]["type"]
                            let email_recipient = response["resp"]["inProgressNotifications"][i]["email_recipient"]
                            let name_recipient = response["resp"]["inProgressNotifications"][i]["name_recipient"]
                            let surname_recipient = response["resp"]["inProgressNotifications"][i]["surname_recipient"]
                            let cod_activity = response["resp"]["inProgressNotifications"][i]["cod_activity"]
                            let status_notification = response["resp"]["inProgressNotifications"][i]["status_notification"]
                            let activity_title = response["resp"]["inProgressNotifications"][i]["activity_title"]
                            let date = response["resp"]["inProgressNotifications"][i]["date"]
                            let time_start = response["resp"]["inProgressNotifications"][i]["time_start"]
                            let time_end = response["resp"]["inProgressNotifications"][i]["time_end"]
                            userInProgressNotifications.push(new InProgressNotificationsModel(id,type,email_recipient,name_recipient,surname_recipient,cod_activity,status_notification,activity_title,date,time_start,time_end))
                            i = i+1
                          }
                        }
                        this.apiService.GetActivityFounderAPI(userEmail).subscribe((response)=>{  
              
                            var userActivitiesFounder : Activities[] = []
                            var i = 0
                            if(response["resp"]!="EMPTY" && response["resp"]!="ERR"){
                              while(response["resp"]["activities"][i]){
                                let ID : Number = response["resp"]["activities"][i]["id"];
                                let title : String = response["resp"]["activities"][i]["title"];
                                let description : String = response["resp"]["activities"][i]["description"];
                                let date : Date = new Date(response["resp"]["activities"][i]["date"])
                                let timeStart : String = response["resp"]["activities"][i]["time_start"];
                                let timeEnd : String = response["resp"]["activities"][i]["time_end"];
                                let city : String = response["resp"]["activities"][i]["city"];
                                let address : String = response["resp"]["activities"][i]["address"];
                                let type : String = response["resp"]["activities"][i]["type"];
                                let founderName  = response["resp"]["activities"][i]["founder"]["name"]
                                let founderSurname  = response["resp"]["activities"][i]["founder"]["surname"]
                                let founderEmail = response["resp"]["activities"][i]["founder"]["email"]
                                let founderUrl_photo = response["resp"]["activities"][i]["founder"]["url_photo"]
                                let founder : UserFriend = new UserFriend(founderName,founderSurname,founderEmail,founderUrl_photo)
                                let partecipants : UserPartecipant[] = []
                                let j = 0
                                while(response["resp"]["activities"][i]["partecipants"][j]){
                                  let name1  = response["resp"]["activities"][i]["partecipants"][j]["name"]
                                  let surname1  = response["resp"]["activities"][i]["partecipants"][j]["surname"]
                                  let email1 = response["resp"]["activities"][i]["partecipants"][j]["email"]
                                  let url_photo1 = response["resp"]["activities"][i]["partecipants"][j]["url_photo"]
                                  let status1 = response["resp"]["activities"][i]["partecipants"][j]["status"]
                                  partecipants.push(new UserPartecipant(name1,surname1,email1,url_photo1,status1))
                                  j = j+1
                                }
                                
                                
                                userActivitiesFounder.push(new Activities(ID,title,description,date,timeStart,timeEnd,city,address,founder,partecipants,type))
                                i=i+1
                              }
                            }
                            this.user = new User(userName,userSurname,userEmail,userPassword,userUrl_photo,userActivities,userActivitiesFounder,userFriendList,userNewNotifications,userInProgressNotifications)    
                            this.loadingService.hide()
                            resolve(this.user)
                            return
                        })
                      })
                  })
                
              })
            })
          })
        }
        else{
          this.loadingService.hide()
          this.user = null
          reject("DENY")
          return
        }
      })
    }
    
    
    
      
    })
    
  }

  async GetLatLonFromAddress(address:string,city:string):Promise<any>{
    return await new Promise((resolve,reject) => {
      this.apiService.GetLatLonFromAddress(address,city).subscribe((data)=>{
        resolve(data);
      })
    });
  }

  

  
}
