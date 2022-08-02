import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { TextfieldEmailComponent } from 'src/app/shared/components/textfield-email/textfield-email.component';
import { TextfieldPswComponent } from 'src/app/shared/components/textfield-psw/textfield-psw.component';
import { TextfieldTextComponent } from 'src/app/shared/components/textfield-text/textfield-text.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { AppComponent } from 'src/app/app.component';




@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedComponentsModule
  ]
})
export class RegisterPageModule { }
