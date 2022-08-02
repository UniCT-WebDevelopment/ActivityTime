import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api-services/api.service';
import {Router} from "@angular/router"
import { delay } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading-services/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nameHTML : Element;
  surnameHTML : Element;
  emailHTML : Element;
  passwordHTML : Element;

  constructor(private apiService : ApiService, private router : Router,private loadingService : LoadingService) {
    this.nameHTML = document.getElementById("RegistrationNameTextfield");
    this.surnameHTML = document.getElementById("RegistrationSurnameTextfield");
    this.emailHTML = document.getElementById("RegistrationEmailTextfield");
    this.passwordHTML = document.getElementById("RegistrationPasswordTextfield");
  }

  ngOnInit(): void {
    this.nameHTML = document.getElementById("RegistrationNameTextfield");
    this.surnameHTML = document.getElementById("RegistrationSurnameTextfield");
    this.emailHTML = document.getElementById("RegistrationEmailTextfield");
    this.passwordHTML = document.getElementById("RegistrationPasswordTextfield");
  }


  onClickFunction(){
    var checkName : Boolean = this.validationName();
    var checkSurname : Boolean = this.validationSurname();
    var checkEmail: Boolean = this.validationEmail();
    var checkPassword : Boolean = this.validationPassword();
    if(checkName && checkSurname && checkEmail && checkPassword){
      var data : Map<String,any> = new Map<String,any>;
      var name : string = this.nameHTML.getElementsByTagName("input")[0].value.toString();
      var surname : string = this.surnameHTML.getElementsByTagName("input")[0].value.toString();
      var email : string = this.emailHTML.getElementsByTagName("input")[0].value.toString();
      var psw : string = this.passwordHTML.getElementsByTagName("input")[0].value.toString();
      data.set("name",name)
      data.set("surname",surname)
      data.set("email",email.toLowerCase())
      data.set("password",psw)
      this.loadingService.show()
      this.apiService.RegistrationAPI(data)
      .pipe(
        delay(2000)
      )
      .subscribe((response) => {
        if(response["resp"] == "OK"){
          //Redirect To Login
          this.loadingService.hide()
          this.router.navigate(["/login"])
        }
      })
      
    }
    
  }

  validationName(){
    var name : string = this.nameHTML.getElementsByTagName("input")[0].value.toString();
    var container : Element = this.nameHTML.getElementsByTagName("div")[0];
    if(name.length >15 || name.length < 3 ){
      container.className = "invalid";
      return false;
    }

    if(!/^[a-zA-Z\s.,]+$/.test(name)){
      container.className = "invalid";
      return false;
    }

    container.className = "valid";
    return true;
  }
  
  validationSurname(){
    var surname : string = this.surnameHTML.getElementsByTagName("input")[0].value.toString();
    var container : Element = this.surnameHTML.getElementsByTagName("div")[0];
    if(surname.length >15 || surname.length < 3 ){
      container.className = "invalid";
      return false;
    }

    if(!/^[a-zA-Z\s.,]+$/.test(surname)){
      container.className = "invalid";
      return false;
    }

    container.className = "valid";
    return true;
  }

  validationEmail(){
    var email : string = this.emailHTML.getElementsByTagName("input")[0].value.toString();
    var container : Element = this.emailHTML.getElementsByTagName("div")[0];

    if(email.length > 30 || email.length < 5 ){
      container.className = "invalid";
      return false;
    }

    if(!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      container.className = "invalid";
      return false;
    }
    container.className = "valid";
    return true;
  }

  validationPassword(){
    var psw : string = this.passwordHTML.getElementsByTagName("input")[0].value.toString();
    var container : Element = this.passwordHTML.getElementsByTagName("div")[0];
    if(psw.length>15 || psw.length < 8 ){
      container.className = "invalid";
      console.log("psw : " + psw);
      return false;
    }

    if(!(/^[A-Za-z0-9]*$/.test(psw))){
      container.className = "invalid";
      return false;
    }

    

    container.className = "valid";
    return true;
    
  }
  
}
