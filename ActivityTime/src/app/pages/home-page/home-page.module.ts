import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';





@NgModule({
  declarations: [
    HomeComponent,
    
    
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class HomePageModule { }
