import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserFriend } from '../../models/user-friend.model';
import { User } from '../../models/user.model';
import { ApiService } from '../../services/api-services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  
})
export class SearchBarComponent implements OnInit {

  constructor(private apiService :ApiService) { }

  ngOnInit(): void {
  }

  @Output() searchResultEmitter: EventEmitter<UserFriend[]> = new EventEmitter<UserFriend[]>();
  placeholder : String = "Search";

  SearchUser(){
    let searchString = document.getElementsByTagName("input")[0].value.toString();
    var friendsList : UserFriend[] = []
    if(searchString != null && searchString != ""){
      this.apiService.GetUserForFriend(searchString).subscribe((response) => {
        if(response["resp"]!="ERR" && response["resp"]!="EMPTY"){
           
          var x = 0
          console.log(response["resp"]["friendlist"][x])
          while(response["resp"]["friendlist"][x]){
            friendsList.push(new UserFriend(response["resp"]["friendlist"][x]["name"],response["resp"]["friendlist"][x]["surname"],response["resp"]["friendlist"][x]["email"],response["resp"]["friendlist"][x]["url_photo"]))
            x++;
          }
          this.searchResultEmitter.emit(friendsList)
        }
      })
    }
    else{
      this.searchResultEmitter.emit(friendsList)
    }
    
  }
}
