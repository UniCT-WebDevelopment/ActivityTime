import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Activities } from 'src/app/shared/models/activities.model';
import { UserFriend, UserPartecipant } from 'src/app/shared/models/user-friend.model';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  selector: 'app-search-bar-activity-zone',
  templateUrl: './search-bar-activity-zone.component.html',
  styleUrls: ['./search-bar-activity-zone.component.scss']
})
export class SearchBarActivityZoneComponent implements OnInit {

  constructor(private apiService :ApiService, private loadingService : LoadingService) { }

  ngOnInit(): void {
  }

  @Output() searchResultEmitter: EventEmitter<Activities[]> = new EventEmitter<Activities[]>();
  placeholder : String = "Insert Zone";

  SearchUser(){
    let searchString = document.getElementsByTagName("input")[0].value.toString();
    var userActivities : Activities[] = []
    if(searchString != null && searchString != ""){
      this.loadingService.show()
      this.apiService.GetActivityForZone(searchString).subscribe((response) => {
        if(response["resp"]!="ERR" && response["resp"]!="EMPTY"){
              var i = 0
              if(response["resp"]!="EMPTY"&& response["resp"]!="ERR"){
                while(response["resp"]["activities"][i]){
                  let ID : Number = response["resp"]["activities"][i]["id"];
                  let title : String = response["resp"]["activities"][i]["title"];
                  let description : String = response["resp"]["activities"][i]["description"];
                  let date : Date = new Date(response["resp"]["activities"][i]["date"])
                  let timeStart : String = response["resp"]["activities"][i]["time_start"];
                  let timeEnd : String = response["resp"]["activities"][i]["time_end"];
                  let city : String = response["resp"]["activities"][i]["city"];
                  let address : String = response["resp"]["activities"][i]["address"];
                  let type : String = response["resp"]["activities"][i]["type"];
                  let founderName  = response["resp"]["activities"][i]["founder"]["name"]
                  let founderSurname  = response["resp"]["activities"][i]["founder"]["surname"]
                  let founderEmail = response["resp"]["activities"][i]["founder"]["email"]
                  let founderUrl_photo = response["resp"]["activities"][i]["founder"]["url_photo"]
                  let founder : UserFriend = new UserFriend(founderName,founderSurname,founderEmail,founderUrl_photo)
                  let partecipants : UserPartecipant[] = []
                  let j = 0
                  while(response["resp"]["activities"][i]["partecipants"][j]){
                    let name  = response["resp"]["activities"][i]["partecipants"][j]["name"]
                    let surname  = response["resp"]["activities"][i]["partecipants"][j]["surname"]
                    let email = response["resp"]["activities"][i]["partecipants"][j]["email"]
                    let status = response["resp"]["activities"][i]["partecipants"][j]["status"]
                    let url_photo = response["resp"]["activities"][i]["partecipants"][j]["url_photo"]
                    partecipants.push(new UserPartecipant(name,surname,email,url_photo,status))
                    j = j+1
                  }
                  
                  
                  userActivities.push(new Activities(ID,title,description,date,timeStart,timeEnd,city,address,founder,partecipants,type))
                  i=i+1
                }
              }
          
        }
        this.loadingService.hide()
        this.searchResultEmitter.emit(userActivities)
      })
    }
    else{
      this.loadingService.hide()
      this.searchResultEmitter.emit(userActivities)
    }
    
  }

}
