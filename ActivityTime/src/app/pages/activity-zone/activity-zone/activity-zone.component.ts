import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activities } from 'src/app/shared/models/activities.model';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  selector: 'app-activity-zone',
  templateUrl: './activity-zone.component.html',
  styleUrls: ['./activity-zone.component.scss']
})
export class ActivityZoneComponent implements OnInit {
  activityZone : Activities[] = []
  constructor(private dataSessionService: DataSessionService,private router : Router,private loadingService : LoadingService) {
    if(!this.dataSessionService.getUser()){
      this.router.navigate(["/login"])
    }
    else{
      dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
      })
    }
  }

  ngOnInit(): void {
  }

  searchBarResultTrigger(activityListForZone : Activities[]){
    
    this.activityZone = []
    var flag = false
    for(let act of activityListForZone){
        
      for(let currentAct of (this.dataSessionService.getUser().activities.concat(this.dataSessionService.getUser().activitiesFounder))){
        if((currentAct.ID == act.ID)){
          flag = true
        } 
      }

      if(Number(act.date.getFullYear()) > new Date().getFullYear() || Number(act.date.getFullYear()) < new Date().getFullYear()){
        flag = true
      }
      if(Number(act.date.getMonth()+1) < new Date().getMonth()+1){
        console.log("l'attività con id "+ act.ID + " è di un mese passato")
        console.log(Number(act.date.getMonth()+1) +" "+console.log(new Date().getMonth()+1))
        flag = true
      }
      
      if(Number(act.date.getMonth()+1) == new Date().getMonth()+1 && Number(act.date.getDate()) < new Date().getUTCDate()){
        if(Number(act.timeStart.split(':')[0]) < new Date().getHours()){
          console.log("l'attività con id "+ act.ID + " è di un giorno passato di questo mese")
          flag = true
        }
      }
      
      if(Number(act.date.getMonth()+1) == new Date().getMonth()+1 && Number(act.date.getDate()) == new Date().getUTCDate()){
        if(Number(act.timeStart.split(':')[0]) < new Date().getHours()){
          
          console.log("l'attività con id "+ act.ID + " è già passata1")
          flag = true
        }
      }

      if(Number(act.date.getMonth()+1) == new Date().getMonth()+1 && Number(act.date.getDate()) == new Date().getUTCDate()){
        if(Number(act.timeStart.split(':')[0]) == new Date().getHours()){
          if(Number(act.timeStart.split(':')[1]) <= new Date().getMinutes()){
            console.log("l'attività con id "+ act.ID + " è già passata2")
            flag = true
          }
        }
      }
      
      for(let notification of this.dataSessionService.getUser().inProgressNotifications){
        if((notification.cod_activity == act.ID && notification.status_notification == "N")){
          flag = true
        }
      }
      
      if(flag == false){
        this.activityZone.push(act)
      }

      flag = false
    }
    
    
  }

  notificationSendTrigger(){
    console.log("è stata inviata una notifica")
      this.dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
        this.searchBarResultTrigger(this.activityZone)
        this.loadingService.hide()
      })
  }

}
