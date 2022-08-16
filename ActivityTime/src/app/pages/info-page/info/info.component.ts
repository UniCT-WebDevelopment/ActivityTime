import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  hideComponentOverflow2 = true
  showAnswerPanel = false
  answerText = ""
  questionText = ""
  constructor(private dataSessionService : DataSessionService, private router : Router) { 
    if(!this.dataSessionService.getUser()){
      console.log("user not set")
      this.router.navigate(["/login"])
    }
    else{
      dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{
        
      })
    }
  }

  async closeAnswerPanel(){
    this.showAnswerPanel = false
    await new Promise(f => setTimeout(f, 500));
    this.hideComponentOverflow2 = true
  }

  async OpenAnswerPanel(){
    this.hideComponentOverflow2 = false
    await new Promise(f => setTimeout(f, 100));
    this.showAnswerPanel = true
  }
  menuNavigate2($event){
    this.hideComponentOverflow2 = true
  }

  

  ngOnInit(): void {
  }

  AnswerQ1(){
    this.questionText = "Home Page"
    this.answerText = "On the home page you can view a calendar where we can view all our daily activities for each month of the current year that we can scroll freely. In this section you can add a new activity using the button on the right side of the screen."
    this.OpenAnswerPanel()
  }
  
  AnswerQ2(){
    this.questionText = "ActivityZone"
    this.answerText = "Within the 'ActivityZone' section it is possible to view all the public activities present in an area (it corresponds to the 'City' section of an activity). Once the requested area has been entered in the search bar, we will be able to send an access request to the founder of the public activity who can accept or reject it by synchronizing our private calendar"
    this.OpenAnswerPanel()
  }

  AnswerQ3(){
    this.questionText = "Discovery Friends"
    this.answerText = "Within the 'Discovery Friends' section we will be able to view our current friends list or search for new users by 'name', 'surname' or 'email' and send a new friend request. Making friends will allow us to be able to invite our friends when we create a 'restricted' or 'public' activity"
    this.OpenAnswerPanel()
  }

  AnswerQ4(){
    this.questionText = "Notifications Zone"
    this.answerText = "Within the 'Notifications Zone' we will be able to view all the notifications that have been sent to us, these can be of 3 different types: (1) Friend request - It will allow us to become friends or not with another user. (2) Invitation to an activity - This will allow us to accept an invitation to an activity created by a friend of ours. (3) Participation Request - This will allow us to accept a new user who requests to participate in one of our public activities."
    this.OpenAnswerPanel()
  }

  AnswerQ5(){
    this.questionText = "Add New Activity"
    this.answerText = "During the creation of a new activity we will be able to enter its data in the appropriate fields, leaving out the optional ones if we want. Activities can be of three types: (1) Private - Private activities are only visible in our calendar. (2) Restricted - Restricted activities are private activities for a group of friends, they must be accepted by all invitees to be visible in the calendar. (3) Public - Public activities are visible to all users and are identified by the city / area indicated during the creation of the activity"
    this.OpenAnswerPanel()
  }

}
