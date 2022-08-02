import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private apiService : ApiService,private router : Router,private dataSessionService : DataSessionService) { }

  ngOnInit() {
    if(!this.dataSessionService.getUser()){
      this.router.navigate(["/login"])
    }
    else{
      console.log(this.dataSessionService.getUser())
    }
  }

}
