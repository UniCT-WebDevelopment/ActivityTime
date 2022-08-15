import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  friendNotificationsList = []
  activityNotificationsList = []
  activityJoinNotificationsList = []
  constructor(private dataSessionService : DataSessionService, private router : Router, private loadingService : LoadingService) { 
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
        this.friendNotificationsList = []
        this.activityNotificationsList = []
        this.activityJoinNotificationsList = []
        for(let notification of this.dataSessionService.getUser().newNotifications){
          if(notification.type == "friend_request") this.friendNotificationsList.push(notification)
          if(notification.type == "invite_request") {
            this.activityNotificationsList.push(notification)
          }
          if(notification.type == "join_request") {
            this.activityJoinNotificationsList.push(notification)
          }
        }
      })
    }
  }

  notificationAcceptTrigger(notification : String){
    console.log("è stata accettata una notifica")
    this.dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
      this.friendNotificationsList = []
        this.activityNotificationsList = []
        this.activityJoinNotificationsList = []
        for(let notification of this.dataSessionService.getUser().newNotifications){
          if(notification.type == "friend_request") this.friendNotificationsList.push(notification)
          if(notification.type == "invite_request"){
            this.activityNotificationsList.push(notification)
          }
          if(notification.type == "join_request") {
            this.activityJoinNotificationsList.push(notification)
          }
          
        }
        this.loadingService.hide()
    })

  }



  ngOnInit(): void {
  }

}
