import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { delay } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import { DataSessionService } from 'src/app/shared/services/data-session-service/data-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  emailHTML: Element;
  passwordHTML: Element;
  currentWidth : number
  currentHeigth: number
  //Fill this user and pass it to the home
  //user: User = new User();
  constructor(private apiService: ApiService, private router: Router,private dataSession : DataSessionService) {
    this.emailHTML = document.getElementById("LoginEmailTextfield")
    this.passwordHTML = document.getElementById("LoginPasswordTextfield")
    window.addEventListener("resize", onresize);
  }

  async ngOnInit() {
    
    this.emailHTML = document.getElementById("LoginEmailTextfield")
    this.passwordHTML = document.getElementById("LoginPasswordTextfield")
    const Introduction = document.getElementById("Introduction")
    this.currentWidth = document.body.clientWidth;
    this.currentHeigth = document.body.clientHeight;
    if(this.currentWidth>=1000){
      Introduction.style.borderTop = this.currentHeigth + "px solid cornflowerblue"
      Introduction.style.borderRight = this.currentWidth/1.5 + "px solid transparent"
    }
    else if (this.currentWidth>=700 && this.currentWidth < 1000){
      Introduction.style.borderTop = "100px solid cornflowerblue"
      Introduction.style.borderRight = "100px solid transparent"
    }
    else if(this.currentWidth < 700){
      Introduction.style.borderTop = "0px solid cornflowerblue"
      Introduction.style.borderRight = "0px solid cornflowerblue"
    }
    
    window.addEventListener("resize", onresize, true);
    try{
      await this.dataSession.DBfetchUserWithToken()
      this.router.navigate(["/home"])
    }
    catch(err){
      localStorage.removeItem("token")
    }
  }

 
  @HostListener('window:resize', ['$event']) onResize() {
    const Introduction = document.getElementById("Introduction")
    this.currentWidth = document.body.clientWidth;
    this.currentHeigth = document.body.clientHeight;
    if(this.currentWidth>=1000){
      Introduction.style.borderTop = this.currentHeigth + "px solid cornflowerblue"
      Introduction.style.borderRight = this.currentWidth/1.5 + "px solid transparent"
    }
    else if (this.currentWidth>=700 && this.currentWidth < 1000){
      Introduction.style.borderTop = "none"
      Introduction.style.borderRight = "none"
      Introduction.style.height =  "" 
    }
    else if(this.currentWidth < 700){
      Introduction.style.borderTop = "0px solid cornflowerblue"
      Introduction.style.borderRight = "0px solid cornflowerblue"
    }
 }


  async onClickFunction() {
    var checkEmail: Boolean = this.validationEmail();
    var checkPassword: Boolean = this.validationPassword();
    if (checkEmail && checkPassword) {
      var email: string = this.emailHTML.getElementsByTagName("input")[0].value.toString();
      var psw: string = this.passwordHTML.getElementsByTagName("input")[0].value.toString();
      var usr : User;
      //Call API for Login user
      try{
        await this.dataSession.DBfetchUserWithoutToken(email.toLowerCase(),psw)
        this.router.navigate(["/home"])
      }
      catch(err){
        console.log("problem")
      }
      
      
      
      
    }

  }

  validationEmail() {
    var email: string = this.emailHTML.getElementsByTagName("input")[0].value.toString();
    var container: Element = this.emailHTML.getElementsByTagName("div")[0];

    if (email.length > 30 || email.length < 5) {
      container.className = "invalid";
      return false;
    }

    if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      container.className = "invalid";
      return false;
    }
    container.className = "valid";
    return true;
  }

  validationPassword() {
    var psw: string = this.passwordHTML.getElementsByTagName("input")[0].value.toString();
    var container: Element = this.passwordHTML.getElementsByTagName("div")[0];
    if (psw.length > 15 || psw.length < 8) {
      container.className = "invalid";
      console.log("lunghezza burtta");
      return false;
    }

    if (!(/^[A-Za-z0-9]*$/.test(psw))) {
      container.className = "invalid";
      return false;
    }



    container.className = "valid";
    return true;

  }
}
