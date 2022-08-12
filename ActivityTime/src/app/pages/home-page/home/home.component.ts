import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInput } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { Router } from '@angular/router';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { Activities } from 'src/app/shared/models/activities.model';
import { UserFriend } from 'src/app/shared/models/user-friend.model';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  encapsulation: ViewEncapsulation.None,
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
  Username = null
  UserSurname = null
  currentMonthNumber = new Date().getMonth();
  currentMonthString : String = this.monthNames[this.currentMonthNumber]
  disableInteract : Boolean = false
  monthsActivities: Array<Array<Activities>> = [];
  onChangeMonthList = []
  friendList = []
  userToInvite = []
  onChangeActivityList = []
  showActivityInfo : Boolean = false
  showAddActivity : Boolean = false
  activityDataModel : Activities = new Activities(0,"","",new Date(),"","","","",new UserFriend("","","",""),[],"")
  activityUserListModel : UserFriend[] = []
  timeStartNewActivity = {hour: '', minute: ''};
  timeEndNewActivity = {hour: '', minute: ''};
  dateNewActivity = ""
  typeNewActivity = "PR"
  hideComponentOverflow = false
  @ViewChild('input', { read: MatInput}) matInput: MatInput;
  @ViewChild('timePicker1', { read: NgbTimepicker}) timePicker1: NgbTimepicker;
  @ViewChild('timePicker2', { read: NgbTimepicker}) timePicker2: NgbTimepicker;
  @ViewChildren("checkboxes", { read: MatCheckbox}) checkboxes: QueryList<any>;
  
  

  constructor(private apiService : ApiService,private router : Router,private dataSessionService : DataSessionService, private loadingService : LoadingService) {
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      console.log(this.dataSessionService.getUser())
    }
    this.Username = dataSessionService.getUser().name
    this.UserSurname = dataSessionService.getUser().surname
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
    
    for(let friend of dataSessionService.getUser().friends){
      this.friendList.push(friend)
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
    this.activityDataModel = activity
    this.activityUserListModel = []
    for(let user of activity.participants){
      this.activityUserListModel.push(user)
    }
  }
  closeActivityInfoPanel(){
    this.showActivityInfo=false
  }

  OpenAddActivityPanel(){
    this.showAddActivity = true
    
    
  }
  closeAddActivityPanel(){
    document.getElementById("newActivityTitle").getElementsByTagName("input")[0].value = ""
    document.getElementById("newActivityDescription").getElementsByTagName("input")[0].value = ""
    document.getElementById("newActivityCity").getElementsByTagName("input")[0].value = ""
    document.getElementById("newActivityAddress").getElementsByTagName("input")[0].value = ""
    this.typeNewActivity = "PR"
    this.matInput.value = '';
    this.timePicker1.writeValue('')
    this.timePicker2.writeValue('')
    this.uncheckAll()
    this.userToInvite = []
    this.showAddActivity = false
    
  }
  OnDateChange(date : Date): void {
    console.log(date)
    let day = date.getDate()
    let month = date.getMonth() +1
    let year = date.getFullYear()
    this.dateNewActivity = year + "-" +  month + "-" +day;
  }

  OnTypeChange(type ): void {
    this.typeNewActivity = type
  }
  async AddNewActivity(){
    let title = document.getElementById("newActivityTitle").getElementsByTagName("input")[0].value.toString();
    let description = document.getElementById("newActivityDescription").getElementsByTagName("input")[0].value.toString();
    let city = document.getElementById("newActivityCity").getElementsByTagName("input")[0].value.toString();
    let address = document.getElementById("newActivityAddress").getElementsByTagName("input")[0].value.toString();
    let type =  this.typeNewActivity
    
    console.log(title)
    //Date end Time format
    let timeStart = ""
    timeStart = this.timeStartNewActivity.hour.toString() + ":"
    if(this.timeStartNewActivity.minute.toString().length == 1){
      timeStart += "0".concat(this.timeStartNewActivity.minute.toString())
    }
    else{
      timeStart += this.timeStartNewActivity.minute.toString()
    }


    let timeEnd = ""
    timeEnd = this.timeEndNewActivity.hour.toString() + ":"
    if(this.timeEndNewActivity.minute.toString().length == 1){
      timeEnd += "0".concat(this.timeEndNewActivity.minute.toString())
    }
    else{
      timeEnd += this.timeEndNewActivity.minute.toString()
    }
    console.log("title: " + title)
    console.log("description: " + description)
    console.log("city: " + city)
    console.log("address: " + address)
    console.log("type: " + type)
    console.log("date: " + this.dateNewActivity)
    console.log("timeStart: " +timeStart)
    console.log("timeEnd: " +timeEnd)

    let jsonData : Map<String,String> = new Map<String,String>()
    jsonData.set("title",title)
    jsonData.set("description",description)
    jsonData.set("city",city)
    jsonData.set("address",address)
    jsonData.set("type",type)
    jsonData.set("date",this.dateNewActivity)
    jsonData.set("timeStart",timeStart)
    jsonData.set("timeEnd",timeEnd)
    jsonData.set("codFounder",this.dataSessionService.getUser().email)
    if(this.userToInvite.length > 0){
      jsonData.set("inviteFriend",JSON.stringify(this.userToInvite))
    }
    this.userToInvite = []
    this.loadingService.show()
    this.apiService.AddActivity(jsonData).subscribe((response)=>{ 
      this.dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.user.email,this.dataSessionService.user.password).then(() => {
        var currentYear = new Date().getFullYear()
        for(let i = 1; i < 13; ++i){
          this.monthsActivities[i-1] = new Array<Activities>()
          this.daysInYear[i] = []
          var currentMonthDays = this.daysInMonth(i,currentYear)
          for(let j = 0; j < currentMonthDays; ++j) { 
            this.daysInYear[i].push(j+1);
          }
        }
        
        
        for(let act of this.dataSessionService.getUser().activities.concat(this.dataSessionService.getUser().activitiesFounder)){
          this.monthsActivities[act.date.getMonth()].push(act)
        }
        

        for(let day of this.daysInYear[this.currentMonthNumber+1]){
          this.onChangeMonthList.push(day)
        }
        this.onChangeActivityList = this.monthsActivities[this.currentMonthNumber] 
        this.onChangeMonthList = []
        for(let day of this.daysInYear[this.currentMonthNumber+1]){
          this.onChangeMonthList.push(day)
        }
        
        
        this.closeAddActivityPanel()

        this.loadingService.hide()
      })
      
      
    })

    

  }
  
  getUserInvite(event) {
    if(event.checked){
      this.userToInvite.push(event.source.value)
    }
    else if(!event.checked){
      const index = this.userToInvite.indexOf(event.source.value);
      if (index > -1) { 
        this.userToInvite.splice(index, 1); 
      }
    }
    console.log(this.userToInvite);
    
  }
  
  uncheckAll() {
    console.log(this.checkboxes)
    this.checkboxes.forEach((element) => {
      element.checked = false;
    });
  }
  

  async delay(ms: number) {
    return await new Promise( resolve => setTimeout(resolve, ms) );
  }

  menuNavigate($event){
    this.hideComponentOverflow = true
  }

}
