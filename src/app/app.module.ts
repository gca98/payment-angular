import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpUserInterceptorProviders } from 'src/app/http-interceptors/'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PaymentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule// npm i @ng-bootstrap/ng-bootstrap
  ],
  providers: [
    httpUserInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
