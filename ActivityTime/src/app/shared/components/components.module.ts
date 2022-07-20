import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { TextfieldEmailComponent } from './textfield-email/textfield-email.component';
import { TextfieldNumComponent } from './textfield-num/textfield-num.component';
import { TextfieldNumDComponent } from './textfield-num-d/textfield-num-d.component';
import { TextfieldPswComponent } from './textfield-psw/textfield-psw.component';
import { TextfieldTextComponent } from './textfield-text/textfield-text.component';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button/custom-button.component';




@NgModule({
  declarations: [
  TextfieldEmailComponent,TextfieldNumComponent,TextfieldNumDComponent,TextfieldPswComponent,TextfieldTextComponent, CustomButtonComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    TextfieldEmailComponent,TextfieldNumComponent,TextfieldNumDComponent,TextfieldPswComponent,TextfieldTextComponent,CustomButtonComponent
  ]
})
export class SharedComponentsModule {}
