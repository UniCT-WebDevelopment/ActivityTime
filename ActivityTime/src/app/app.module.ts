import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextfieldPswComponent } from './shared/components/textfield-psw/textfield-psw.component';
import { TextfieldEmailComponent } from './shared/components/textfield-email/textfield-email.component';
import { TextfieldTextComponent } from './shared/components/textfield-text/textfield-text.component';
import { TextfieldNumComponent } from './shared/components/textfield-num/textfield-num.component';
import { TextfieldNumDComponent } from './shared/components/textfield-num-d/textfield-num-d.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
