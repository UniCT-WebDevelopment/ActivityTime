import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { TextfieldEmailComponent } from './textfield-email/textfield-email.component';
import { TextfieldNumComponent } from './textfield-num/textfield-num.component';
import { TextfieldNumDComponent } from './textfield-num-d/textfield-num-d.component';
import { TextfieldPswComponent } from './textfield-psw/textfield-psw.component';
import { TextfieldTextComponent } from './textfield-text/textfield-text.component';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { SpinnerService } from '../services/loading-services/spinner.service';
import { DayActComponent } from './day-act/day-act.component';
import { ActivityComponent } from './activity/activity.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TextFiledAddActTextComponent } from './text-filed-add-act-text/text-filed-add-act-text.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FriendFieldComponent } from './friend-field/friend-field.component';
import { NotificationFieldComponent } from './notification-field/notification-field/notification-field.component';
import { SearchBarActivityZoneComponent } from './search-bar-activity-zone/search-bar-activity-zone/search-bar-activity-zone.component';
import { ActivityZoneFieldComponent } from './activity-zone-field/activity-zone-field/activity-zone-field.component';
import { MapComponent } from './map/map.component';








@NgModule({
  declarations: [
  TextfieldEmailComponent,TextfieldNumComponent,TextfieldNumDComponent,TextfieldPswComponent,TextfieldTextComponent, CustomButtonComponent, SpinnerComponent, DayActComponent, ActivityComponent, SideMenuComponent, TextFiledAddActTextComponent, SearchBarComponent, FriendFieldComponent, NotificationFieldComponent, SearchBarActivityZoneComponent, ActivityZoneFieldComponent, MapComponent, 
  ],
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports:[
    TextfieldEmailComponent,TextfieldNumComponent,TextfieldNumDComponent,TextfieldPswComponent,TextfieldTextComponent,CustomButtonComponent,SpinnerComponent,DayActComponent,ActivityComponent,SideMenuComponent, TextFiledAddActTextComponent, SearchBarComponent, FriendFieldComponent, NotificationFieldComponent, SearchBarActivityZoneComponent, ActivityZoneFieldComponent, MapComponent
  ]
})
export class SharedComponentsModule {}
