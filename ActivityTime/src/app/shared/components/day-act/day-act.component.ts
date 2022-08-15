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
  @Input() month = 0
  activityList = []
  activityInfoID : Number
  @Output() emitter: EventEmitter<Activities> = new EventEmitter<Activities>();
  constructor() {    
    
  }
  ngAfterViewInit() {
    if(Number(this.day) == new Date().getUTCDate() && this.month == new Date().getMonth()+1){
      console.log("SETTO A GOLD day: " + this.day)
      if(document.getElementById("DayText"+this.day)){
        document.getElementById("DayText"+this.day).style.color = "gold"
      }
      
    }
    else{
      if(document.getElementById("DayText"+this.day)){
        console.log("SETTO A WHITE day: " + this.day)
        document.getElementById("DayText"+this.day).style.color = "white"
      }
    }
  }
  

  ngOnChanges(): void {
    console.log("MESE CORRENTE: " + (new Date().getMonth()+1) + "MESE PASSATO " + this.month)
    this.activityList = []
    if(Number(this.day) == new Date().getUTCDate() && this.month == new Date().getMonth()+1){
      console.log("SETTO A GOLD day: " + this.day)
      if(document.getElementById("DayText"+this.day)){
        document.getElementById("DayText"+this.day).style.color = "gold"
      }
      
    }
    else{
      if(document.getElementById("DayText"+this.day)){
        console.log("SETTO A WHITE day: " + this.day)
        document.getElementById("DayText"+this.day).style.color = "white"
      }
    }
    for(let act of this.activityListInput){
      
     
      if( this.day == act.date.getDate()){
        
        this.activityList.push({
          type: act.type,
          id: act.ID,
          time: act.timeStart
        })
      }

    }
    console.log("activityList of day: " + this.day + " - " +JSON.stringify (this.activityList))

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
