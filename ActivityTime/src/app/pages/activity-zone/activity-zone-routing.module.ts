import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityZoneComponent } from './activity-zone/activity-zone.component';

const routes: Routes = [
  {
    path: "",
    component: ActivityZoneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityZoneRoutingModule { }
