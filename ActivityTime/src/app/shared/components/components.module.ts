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







@NgModule({
  declarations: [
  TextfieldEmailComponent,TextfieldNumComponent,TextfieldNumDComponent,TextfieldPswComponent,TextfieldTextComponent, CustomButtonComponent, SpinnerComponent, DayActComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports:[
    TextfieldEmailComponent,TextfieldNumComponent,TextfieldNumDComponent,TextfieldPswComponent,TextfieldTextComponent,CustomButtonComponent,SpinnerComponent,DayActComponent
  ]
})
export class SharedComponentsModule {}
