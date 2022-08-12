import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  friendNotificationsList = []
  activityNotificationsList = []
  constructor(private dataSessionService : DataSessionService, private router : Router) { 
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
        this.friendNotificationsList = []
        this.activityNotificationsList = []
        for(let notification of this.dataSessionService.getUser().newNotifications){
          if(notification.type == "friend_request") this.friendNotificationsList.push(notification)
          if(notification.type == "invite_request") {
            this.activityNotificationsList.push(notification)
          }
        }
        console.log(this.dataSessionService.getUser())
      })
    }
  }

  notificationAcceptTrigger(notification : String){
    console.log("è stata accettata una notifica")
    this.dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
      this.friendNotificationsList = []
        this.activityNotificationsList = []
        for(let notification of this.dataSessionService.getUser().newNotifications){
          if(notification.type == "friend_request") this.friendNotificationsList.push(notification)
          if(notification.type == "invite_request"){
            this.activityNotificationsList.push(notification)
          }
          
        }
        
    })

  }



  ngOnInit(): void {
  }

}
