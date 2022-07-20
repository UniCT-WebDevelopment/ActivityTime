import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailHTML : Element;
  passwordHTML : Element;

  //Fill this user and pass it to the home
  user : User = new User();
  constructor() { 
    this.emailHTML = document.getElementsByTagName("app-textfield-email")[0];
    this.passwordHTML = document.getElementsByTagName("app-textfield-psw")[0];
  }

  ngOnInit(): void {
    this.emailHTML = document.getElementsByTagName("app-textfield-email")[0];
    this.passwordHTML = document.getElementsByTagName("app-textfield-psw")[0];
  }

  

  onClickFunction(){
    var checkEmail: Boolean = this.validationEmail();
    var checkPassword : Boolean = this.validationPassword();
    if(checkEmail && checkPassword){
      //Call API for register user
    }
    
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
      console.log("lunghezza burtta");
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
