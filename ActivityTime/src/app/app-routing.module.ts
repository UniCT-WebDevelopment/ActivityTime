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
    loadChildren: () => import("./pages/home-page/home-page.module").then((module) => module.HomePageModule),
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
