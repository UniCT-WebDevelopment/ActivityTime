import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoPageRoutingModule } from './info-page-routing.module';
import { InfoComponent } from './info/info.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoPageRoutingModule,
    SharedComponentsModule,
    MatIconModule
  ]
})
export class InfoPageModule { }
