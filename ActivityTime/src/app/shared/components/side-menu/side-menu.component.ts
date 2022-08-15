import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router : Router) { }
  @Output() menuNavigateEmitter: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  async GoHome(){
    await new Promise(f => setTimeout(f, 100));
    this.router.navigate(["/home"])
  }
  async GoFriendList(){
    this.menuNavigateEmitter.emit("friend")
    await new Promise(f => setTimeout(f, 100));
    this.router.navigate(["/friend"])
  }

  async GoNotificationsList(){
    this.menuNavigateEmitter.emit("notification")
    console.log("delayStart")
    await new Promise(f => setTimeout(f, 100));
    console.log("delayFinish")
    this.router.navigate(["/notifications"])
  }

  async GoActivityZone(){
    this.menuNavigateEmitter.emit("activityZone")
    console.log("delayStart")
    await new Promise(f => setTimeout(f, 100));
    console.log("delayFinish")
    this.router.navigate(["/activityZone"])
  }
  async Logout(){
    this.menuNavigateEmitter.emit("logout")
    await new Promise(f => setTimeout(f, 100));
    console.log("LogOut")
    localStorage.removeItem("token")
    this.router.navigate(["/login"])
    
    
  }

  

}
