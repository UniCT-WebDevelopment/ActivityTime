import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { ApiService } from './shared/services/api-services/api.service';
import { DataSessionService } from './shared/services/data-session-service/data-session.service';
import { LoadingService } from './shared/services/loading-services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  constructor(private apiService:ApiService,private router : Router, private loadingService : LoadingService, private dataSessionService : DataSessionService ){}
  ngOnInit(){
    
  }

  ResetToken(){
    console.log("Tokene reset")
    localStorage.removeItem("token")
  }
  

  title = 'ActivityTime';
}
