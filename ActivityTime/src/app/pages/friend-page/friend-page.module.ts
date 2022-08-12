import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendPageRoutingModule } from './friend-page-routing.module';
import { FriendComponent } from './friend/friend.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FriendComponent
  ],
  imports: [
    CommonModule,
    FriendPageRoutingModule,
    SharedComponentsModule,
    MatIconModule
  ]
})
export class FriendPageModule { }
