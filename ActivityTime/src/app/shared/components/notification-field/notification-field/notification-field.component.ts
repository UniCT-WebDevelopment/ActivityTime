import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  selector: 'app-notification-field',
  templateUrl: './notification-field.component.html',
  styleUrls: ['./notification-field.component.scss']
})
export class NotificationFieldComponent implements OnInit {

  constructor(private apiService : ApiService, private dataSessionService : DataSessionService,private loadingService :LoadingService) { }

  ngOnInit(): void {
    console.log(this.activityDate)
    console.log(this.activityTimeStart)
    console.log(this.activityTimeEnd)
  }
  @Input() idNotification : Number = 0;
  @Input() idActivity : Number = 0;
  @Input() requestType : String = "";
  @Input() fromName : String = "";
  @Input() fromSurname : String = "";
  @Input() fromEmail : String = "";
  @Input() activityTitle : String = "";
  @Input() activityDate : Date = new Date();
  @Input() activityTimeStart: String = "";
  @Input() activityTimeEnd: String = "";

  
  @Output() notificationAcceptEmitter: EventEmitter<String> = new EventEmitter<String>();
  AcceptRequest(){
    let jsonData : Map<String,Object> = new Map<String,String>()
    if(this.requestType == "friend_request"){
      jsonData.set("cod_usr",this.dataSessionService.getUser().email)
      jsonData.set("cod_friend",this.fromEmail)
      this.loadingService.show()
      this.apiService.AddFriend(jsonData).subscribe(()=>{
        this.apiService.DeleteNotification(this.idNotification).subscribe(()=>{
          this.notificationAcceptEmitter.emit("friend_request")
          
        })
      })
    }
    else if(this.requestType== "invite_request"){
      jsonData.set("cod_usr",this.dataSessionService.getUser().email)
      jsonData.set("cod_act",this.idActivity)
      jsonData.set("status","N")
      this.loadingService.show()
      this.apiService.AddActivityPartecipant(jsonData).subscribe(()=>{
        this.apiService.DeleteNotification(this.idNotification).subscribe(()=>{
          this.notificationAcceptEmitter.emit("invite_request")
          
        })
      })
    }
    else if(this.requestType== "join_request"){
      jsonData.set("cod_usr",this.fromEmail)
      jsonData.set("cod_act",this.idActivity)
      jsonData.set("status","N")
      this.loadingService.show()
      this.apiService.AddActivityPartecipant(jsonData).subscribe(()=>{
        this.apiService.DeleteNotification(this.idNotification).subscribe(()=>{
          this.notificationAcceptEmitter.emit("join_request")
          
        })
      })
    }
  }

  DenyRequest(){
    if(this.requestType == "friend_request"){
      this.loadingService.show()
      this.apiService.DeleteNotification(this.idNotification).subscribe(()=>{
        this.notificationAcceptEmitter.emit("friend_request")
        
      })
    }
    else if(this.requestType== "invite_request"){
      this.loadingService.show()
      this.apiService.DeleteNotification(this.idNotification).subscribe(()=>{
        this.notificationAcceptEmitter.emit("invite_request")
        
      })
    }
    else if(this.requestType== "join_request"){
      this.loadingService.show()
      this.apiService.DeleteNotification(this.idNotification).subscribe(()=>{
        this.notificationAcceptEmitter.emit("join_request")
        
      })
    }
  }

}
