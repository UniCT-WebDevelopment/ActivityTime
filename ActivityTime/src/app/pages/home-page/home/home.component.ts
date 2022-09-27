import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInput } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { Router } from '@angular/router';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { timestamp } from 'rxjs';
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
  hideComponentOverflow = true
  @ViewChild('input', { read: MatInput}) matInput: MatInput;
  @ViewChild('timePicker1', { read: NgbTimepicker}) timePicker1: NgbTimepicker;
  @ViewChild('timePicker2', { read: NgbTimepicker}) timePicker2: NgbTimepicker;
  @ViewChildren("checkboxes", { read: MatCheckbox}) checkboxes: QueryList<any>;
  address : string;
  city : string;
  

  constructor(private apiService : ApiService,private router : Router,private dataSessionService : DataSessionService, private loadingService : LoadingService) {
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
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
      this.monthsActivities[act.date.getMonth()].sort((a,b)=>{
        let timeA = a.timeStart.split(':');
        let timeB = b.timeStart.split(':');
        if(timeA[0] > timeB[0]){
          console.log("è piu grande a: " + a)
          return 1
        }
        if(timeA[0] < timeB[0]){
          
          console.log("è piu grande b: " + b)
          return -1
        }

        if(timeA[0] == timeB[0] && timeA[1] >= timeB[1]) return 1
        if(timeA[0] == timeB[0] && timeA[1] < timeB[1]) return -1

        return 0
      })
    }
    

    for(let day of this.daysInYear[this.currentMonthNumber+1]){
      this.onChangeMonthList.push(day)
    }
    
    for(let friend of dataSessionService.getUser().friends){
      this.friendList.push(friend)
    }
      })
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

  ngAfterViewInit() {
    
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

  async ActivityInfoTrigger(activity : Activities){
    //Keep attention, it's reference not original
    
    
    if(this.showActivityInfo == true){

      this.showActivityInfo = false
      await new Promise(f => setTimeout(f, 500));
      this.activityDataModel = activity
      this.activityUserListModel = []
      for(let user of activity.participants){
        this.activityUserListModel.push(user)
      }
      
      this.address = activity.address.toString();
      this.city = activity.city.toString();
      this.hideComponentOverflow = true
      await new Promise(f => setTimeout(f, 100));
      this.hideComponentOverflow = false
      await new Promise(f => setTimeout(f, 100));
    }

    else{
      this.activityDataModel = activity
      this.activityUserListModel = []
      for(let user of activity.participants){
        this.activityUserListModel.push(user)
      }
      this.city = activity.city.toString();
      this.address = activity.address.toString();
      this.hideComponentOverflow = false
      await new Promise(f => setTimeout(f, 100));
    }
    
    this.showActivityInfo=true
  }
  async closeActivityInfoPanel(){
    this.showActivityInfo = false
    await new Promise(f => setTimeout(f, 500));
    this.hideComponentOverflow = true
  }

  async OpenAddActivityPanel(){
    this.hideComponentOverflow = false
    await new Promise(f => setTimeout(f, 100));
    this.showAddActivity=true
  }


 
  async closeAddActivityPanel(){
    document.getElementById("newActivityTitle").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("newActivityDescription").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("newActivityCity").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("newActivityAddress").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("titleDateNewActivity").style.color = "white";
    document.getElementById("timeStartTitle").style.color = "white";
    document.getElementById("timeEndTitle").style.color = "white";
    document.getElementById("newActivityTitle").getElementsByTagName("input")[0].value = ""
    document.getElementById("newActivityDescription").getElementsByTagName("input")[0].value = ""
    document.getElementById("newActivityCity").getElementsByTagName("input")[0].value = ""
    document.getElementById("newActivityAddress").getElementsByTagName("input")[0].value = ""
    this.typeNewActivity = "PR"
    this.dateNewActivity = ""
    this.matInput.value = '';
    console.log(this.timePicker1)
    this.timePicker1.writeValue('')
    this.timePicker2.writeValue('')
    this.uncheckAll()
    this.userToInvite = []
    
    this.showAddActivity = false
    await new Promise(f => setTimeout(f, 500));
    
  }
  OnDateChange(date : Date): void {  
    if(!date || date.toString() == "" || !date.getDate()){
      this.dateNewActivity = ""
      console.log("DATA ERRATA")
    }
    else{
      let day = date.getDate()
      let month = date.getMonth() +1
      let year = date.getFullYear()
      this.dateNewActivity = year + "-" +  month + "-" +day;
      console.log("DATA SETTATA: " + this.dateNewActivity)
    }
    
  }

  OnTypeChange(type ): void {
    this.typeNewActivity = type
  }


  AddNewActivity(){
    let flag = false;
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
    document.getElementById("newActivityTitle").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("newActivityDescription").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("newActivityCity").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("newActivityAddress").getElementsByTagName("div")[0].className = "valid"
    document.getElementById("titleDateNewActivity").style.color = "white";
    document.getElementById("timeStartTitle").style.color = "white";
    document.getElementById("timeEndTitle").style.color = "white";

    
    if(title == "" || title == undefined || title.length < 3){
      document.getElementById("newActivityTitle").getElementsByTagName("div")[0].className = "invalid"
      flag = true
    }
    if(city == "" || city == undefined || city.length < 2){
      document.getElementById("newActivityCity").getElementsByTagName("div")[0].className = "invalid"
      flag = true
    }
    if(address == "" || address == undefined || address.length < 5){
      document.getElementById("newActivityAddress").getElementsByTagName("div")[0].className = "invalid"
      flag = true
    }
    if(this.dateNewActivity == "" || this.dateNewActivity == undefined){
      document.getElementById("titleDateNewActivity").style.color = "red";
      flag = true
    }
    if(timeStart == "" || timeStart == undefined){
      document.getElementById("timeStartTitle").style.color = "red";
      flag = true
    }
    if(timeEnd == "" || timeEnd == undefined){
      document.getElementById("timeEndTitle").style.color = "red";
      flag = true
    }
    
    console.log(Number(timeStart.split(":")[0]) + " - " + Number(timeStart.split(":")[1]))
    if(Number(this.dateNewActivity.split("-")[1]) < new Date().getMonth()+1){
      console.log(Number(this.dateNewActivity.split("-")[1]) + "+" + new Date().getMonth()+1)
      console.log("l'attività è di un mese passato")
      document.getElementById("titleDateNewActivity").style.color = "red";
      flag = true
    }
    if(Number(this.dateNewActivity.split("-")[0]) < new Date().getFullYear()){
      console.log(Number(this.dateNewActivity.split("-")[0]) + "+" + new Date().getFullYear())
      console.log("l'attività è di un anno passato")
      document.getElementById("titleDateNewActivity").style.color = "red";
      flag = true
    }

    if(Number(this.dateNewActivity.split("-")[0]) > new Date().getFullYear()){
      console.log(Number(this.dateNewActivity.split("-")[0]) + "+" + new Date().getFullYear())
      console.log("l'attività è di un anno futuro")
      document.getElementById("titleDateNewActivity").style.color = "red";
      flag = true
    }
    if(Number(this.dateNewActivity.split("-")[2]) < new Date().getDate() && Number(this.dateNewActivity.split("-")[1]) == new Date().getMonth()+1){
      console.log(Number(this.dateNewActivity.split("-")[2]) + "+" + new Date().getDate())
      console.log(Number(this.dateNewActivity.split("-")[1]) + "+" + new Date().getMonth()+1)
      console.log("l'attività è di un giorno passato di questo mese")
      document.getElementById("titleDateNewActivity").style.color = "red";
      flag = true
    }
    if(Number(timeStart.split(":")[0]) > Number(timeEnd.split(":")[0])){
      document.getElementById("timeStartTitle").style.color = "red";
      document.getElementById("timeEndTitle").style.color = "red";
      console.log("il tempo di inizio in ore è maggiore di quello di fine")
      flag = true
    }
    if(Number(timeStart.split(":")[0]) == Number(timeEnd.split(":")[0])){
      if(Number(timeStart.split(":")[1]) >= Number(timeEnd.split(":")[1])){
        document.getElementById("timeStartTitle").style.color = "red";
        document.getElementById("timeEndTitle").style.color = "red";
        console.log("il tempo di inizio in ore è uguale o minore ma in minuti è maggiore di quello di fine")
        flag = true
      }
    }

    if(flag == false){

    
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
            this.monthsActivities[act.date.getMonth()].sort((a,b)=>{
              let timeA = a.timeStart.split(':');
              let timeB = b.timeStart.split(':');
              if(timeA[0] > timeB[0]){
                console.log("è piu grande a: " + a)
                return 1
              }
              if(timeA[0] < timeB[0]){
                
                console.log("è piu grande b: " + b)
                return -1
              }
      
              if(timeA[0] == timeB[0] && timeA[1] >= timeB[1]) return 1
              if(timeA[0] == timeB[0] && timeA[1] < timeB[1]) return -1
      
              return 0
            })
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
    else{
      flag = false;
    }
    

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
