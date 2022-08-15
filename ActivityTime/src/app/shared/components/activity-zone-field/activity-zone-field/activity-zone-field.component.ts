import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  selector: 'app-activity-zone-field',
  templateUrl: './activity-zone-field.component.html',
  styleUrls: ['./activity-zone-field.component.scss']
})
export class ActivityZoneFieldComponent implements OnInit {

  constructor(private dataSessionService : DataSessionService, private loadingService : LoadingService, private apiService : ApiService) { }

  ngOnInit(): void {
  }

  @Input() idActivity : Number = 0;
  @Input() activityTitle : String = "";
  @Input() activityCity : String = "";
  @Input() activityAddress : String = "";
  @Input() activityDate : Date = new Date();
  @Input() activityTimeStart : String = "";
  @Input() activityTimeEnd : String = "";
  @Input() activityFounderName : String = ""
  @Input() activityFounderSurname: String = "";
  @Input() activityFounderEmail: String = "";
  @Input() activityDescription: String = "";

  @Output() notificationSendEmitter: EventEmitter<String> = new EventEmitter<String>();
  SendRequestForJoin(){
    let jsonData : Map<String,Object> = new Map<String,String>()
    jsonData.set("type","join_request")
    jsonData.set("cod_usr",this.activityFounderEmail)
    jsonData.set("cod_sender",this.dataSessionService.getUser().email)
    jsonData.set("cod_activity",this.idActivity)
    jsonData.set("status_notification","N")
    jsonData.set("activity_title",this.activityTitle)
    jsonData.set("date",this.activityDate.getFullYear()+ "-"+(this.activityDate.getMonth()+1) + "-" + this.activityDate.getDate())
    jsonData.set("time_start",this.activityTimeStart)
    jsonData.set("time_end",this.activityTimeEnd)
    this.loadingService.show()
    this.apiService.AddNotification(jsonData).subscribe(()=>{
      this.notificationSendEmitter.emit("join_request")
    })
  }
}
