import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activities } from 'src/app/shared/models/activities.model';
import { UserFriend } from 'src/app/shared/models/user-friend.model';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  daysInYear : Number[][] = []
  recreate = true;
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  currentMonthNumber = new Date().getMonth();
  currentMonthString : String = this.monthNames[this.currentMonthNumber]
  disableInteract : Boolean = false
  monthsActivities: Array<Array<Activities>> = [];
  onChangeMonthList = []
  onChangeActivityList = []
  showActivityInfo : Boolean = false
  

  constructor(private apiService : ApiService,private router : Router,private dataSessionService : DataSessionService, private changeDetector: ChangeDetectorRef) {
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      console.log(this.dataSessionService.getUser())
    }
    var currentYear = new Date().getFullYear()
    for(let i = 1; i < 13; ++i){
      this.monthsActivities[i-1] = new Array<Activities>()
      this.daysInYear[i] = []
      var currentMonthDays = this.daysInMonth(i,currentYear)
      for(let j = 0; j < currentMonthDays; ++j) { 
        this.daysInYear[i].push(j+1);
      }
    }
    
    
    for(let act of dataSessionService.getUser().activities.concat(dataSessionService.getUser().activitiesFounder)){

      this.monthsActivities[act.date.getMonth()].push(act)
    }
    

    for(let day of this.daysInYear[this.currentMonthNumber+1]){
      this.onChangeMonthList.push(day)
    }
    
    

    

    

  } 
   

  ngOnInit() {
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      console.log(this.dataSessionService.getUser())
    }
    
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  async prevContainerOnClick(){
   
      var panel : Element = document.getElementById("PanelMonthAct");
      var monthName : Element = document.getElementById("MonthInfo");
      this.currentMonthNumber --;
      if(this.currentMonthNumber==0){
        document.getElementById("prevContainer").style.display = "none"
      }
      document.getElementById("nextContainer").style.display = "block"
      monthName.innerHTML = this.monthNames[this.currentMonthNumber]
      //panel.classList.add("destroyContainer") 
        
     //await this.delay(1000)
      this.onChangeActivityList = this.monthsActivities[this.currentMonthNumber] 
      this.onChangeMonthList = []
      for(let day of this.daysInYear[this.currentMonthNumber+1]){
        this.onChangeMonthList.push(day)
      }

 
      //document.getElementById("prevContainer").style.opacity = "1"
      //document.getElementById("nextContainer").style.opacity = "1"
      
      
    
    

    
    
    
  }
  async nextContainerOnClick(){
    
      
      //document.getElementById("prevContainer").style.opacity = "0.5"
      //document.getElementById("nextContainer").style.opacity = "0.5"
      var panel : Element = document.getElementById("PanelMonthAct");
      var monthName : Element = document.getElementById("MonthInfo");
      this.currentMonthNumber ++;
      if(this.currentMonthNumber==11){
        document.getElementById("nextContainer").style.display = "none"
      }
      document.getElementById("prevContainer").style.display = "block"
      monthName.innerHTML = this.monthNames[this.currentMonthNumber]
      //Animations
      //panel.classList.add("destroyContainer")   
     
      //await this.delay(1000)
      
      this.onChangeActivityList = this.monthsActivities[this.currentMonthNumber] 
      this.onChangeMonthList = []
      for(let day of this.daysInYear[this.currentMonthNumber+1]){
        this.onChangeMonthList.push(day)
      }
      
      
      //document.getElementById("prevContainer").style.opacity = "1"
      //document.getElementById("nextContainer").style.opacity = "1"
      
      
    
    
  }

  ActivityInfoTrigger(activity : Activities){
    //Keep attention, it's reference not original
    this.showActivityInfo=true
    console.log("nella home è arrivato: ")
    console.log(activity)
  }
  closeActivityInfoPanel(){
    this.showActivityInfo=false
  }

  async delay(ms: number) {
    return await new Promise( resolve => setTimeout(resolve, ms) );
  }

}
