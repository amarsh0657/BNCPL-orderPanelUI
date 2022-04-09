import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthlayoutComponent } from './authlayout.component';
import { AuthlayoutRoutingModule } from './authlayout-routing.module';
import { SplashComponent } from './splash/splash.component';
import { LandingComponent } from './landing/landing.component';
import { SwiperModule } from 'swiper/angular';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
// import { Thankyou2Component } from './thankyou2/thankyou2.component';
// import { ThankyouComponent } from './thankyou/thankyou.component';

import { VerifyComponent } from './verify/verify.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Thankyou2Component } from './thankyou2/thankyou2.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';



@NgModule({
  declarations: [
    AuthlayoutComponent,
    SplashComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,

    // TermsandconditionsComponent,
    Thankyou2Component,
    ThankyouComponent,

    VerifyComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    AuthlayoutRoutingModule,
    CommonModule,
    SwiperModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthlayoutModule { }
