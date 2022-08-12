import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsPageRoutingModule } from './notifications-page-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsPageRoutingModule,
    SharedComponentsModule
  ]
})
export class NotificationsPageModule { }
