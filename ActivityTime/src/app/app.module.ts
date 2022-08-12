import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextfieldPswComponent } from './shared/components/textfield-psw/textfield-psw.component';
import { TextfieldEmailComponent } from './shared/components/textfield-email/textfield-email.component';
import { TextfieldTextComponent } from './shared/components/textfield-text/textfield-text.component';
import { TextfieldNumComponent } from './shared/components/textfield-num/textfield-num.component';
import { TextfieldNumDComponent } from './shared/components/textfield-num-d/textfield-num-d.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NetworkInterceptor } from './shared/services/network.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SharedComponentsModule } from './shared/components/components.module';
import { DataSessionService } from './shared/services/data-session-service/data-session.service';
import { MatNativeDateModule } from '@angular/material/core';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    MatNativeDateModule,
    
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },DataSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
