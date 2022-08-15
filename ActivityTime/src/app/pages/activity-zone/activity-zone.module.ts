import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityZoneRoutingModule } from './activity-zone-routing.module';
import { ActivityZoneComponent } from './activity-zone/activity-zone.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    ActivityZoneComponent
  ],
  imports: [
    CommonModule,
    ActivityZoneRoutingModule,
    SharedComponentsModule
  ]
})
export class ActivityZoneModule { }
