import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserFriend } from 'src/app/shared/models/user-friend.model';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  friendsList = []
  userFound = []
  constructor(private dataSessionService : DataSessionService, private router : Router, private loadingService :LoadingService) { 
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
        this.friendsList = []
        for(let friend of this.dataSessionService.getUser().friends){
          this.friendsList.push(friend)
        }
        console.log(this.dataSessionService.getUser())
      })
    }
  }

  searchBarResultTrigger(userListFound : UserFriend[]){
    this.userFound = []
    var flag = false
    for(let user of userListFound){
      for(let notification of this.dataSessionService.getUser().inProgressNotifications){
        if((notification.email_recipient == user.email && notification.status_notification == "N")){
          flag = true
        }
      }
      for(let userF of this.dataSessionService.getUser().friends){
        if(userF.email == user.email){
          flag = true
        }
      }
      if(user.email == this.dataSessionService.getUser().email){
        flag = true
      }
      if(flag == false){
        this.userFound.push(user)
      }

      flag = false
    }
  }

  notificationSenderTrigger(notification : String){
    console.log("è stata inviata una notifica")
    this.dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
      this.searchBarResultTrigger(this.userFound)
      this.loadingService.hide()
    })

  }

  ngOnInit(): void {
  }

}
