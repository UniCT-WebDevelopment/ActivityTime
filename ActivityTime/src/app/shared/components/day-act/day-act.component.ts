import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activities } from '../../models/activities.model';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-day-act',
  templateUrl: './day-act.component.html',
  styleUrls: ['./day-act.component.scss']
})
export class DayActComponent  {
  @Input() activityListInput = []
  @Input() day = ""
  activityList = []
  activityInfoID : Number
  @Output() emitter: EventEmitter<Activities> = new EventEmitter<Activities>();
  constructor() {    
  }

  ngOnChanges(): void {
    this.activityList = []
    
    for(let act of this.activityListInput){
      
     
      if( this.day == act.date.getDate()){
        
        this.activityList.push({
          type: act.type,
          id: act.ID,
          time: act.timeStart
        })
      }

    }

  }

  EmitDataActivity(ID : Number){
    this.activityInfoID = ID
    var activityToEmit:Activities
    for(let act of this.activityListInput){
      if(act.ID == ID){
        activityToEmit = act
      }
    }
    this.emitter.emit(activityToEmit)
  }

}
