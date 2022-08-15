import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../../services/api-services/api.service';
import { DataSessionService } from '../../services/data-session-service/data-session.service';
import { LoadingService } from '../../services/loading-services/loading.service';

@Component({
  selector: 'app-friend-field',
  templateUrl: './friend-field.component.html',
  styleUrls: ['./friend-field.component.scss']
})
export class FriendFieldComponent implements OnInit {

  constructor(private apiService : ApiService, private dataSessionService : DataSessionService,private loadingService :LoadingService) { }

  ngOnInit(): void {
  }

  @Input() showAllData : Boolean = true;
  @Input() name : String = "";
  @Input() surname : String = "";
  @Input() email : String = "";
  @Output() notificationSenderEmitter: EventEmitter<String> = new EventEmitter<String>();
  SendFriendRequest(){
    let jsonData : Map<String,Object> = new Map<String,String>()
    jsonData.set("type","friend_request")
    jsonData.set("cod_usr",this.email)
    jsonData.set("cod_sender",this.dataSessionService.getUser().email)
    jsonData.set("cod_activity",0)
    jsonData.set("status_notification","N")
    jsonData.set("activity_title","empty")
    jsonData.set("date","00-00-00")
    jsonData.set("time_start","00:00")
    jsonData.set("time_end","00:00")
    this.loadingService.show()
    this.apiService.AddNotification(jsonData).subscribe(()=>{
      this.notificationSenderEmitter.emit("friend_request")
    })
  }

}
