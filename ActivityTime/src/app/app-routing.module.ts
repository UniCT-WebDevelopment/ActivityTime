import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./pages/login-page/login-page.module").then((module) => module.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () => import("./pages/register-page/register-page.module").then((module) => module.RegisterPageModule)
  },
  {
    path: "home",
    loadChildren: () => import("./pages/home-page/home-page.module").then((module) => module.HomePageModule)
  },
  {
    path: "friend",
    loadChildren: () => import("./pages/friend-page/friend-page.module").then((module) => module.FriendPageModule)
  },
  {
    path: "notifications",
    loadChildren: () => import("./pages/notifications-page/notifications-page.module").then((module) => module.NotificationsPageModule)
  },
  {
    path: "activityZone",
    loadChildren: () => import("./pages/activity-zone/activity-zone.module").then((module) => module.ActivityZoneModule)
  },
  {
    path: "**",
    loadChildren: () => import("./pages/login-page/login-page.module").then((module) => module.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
