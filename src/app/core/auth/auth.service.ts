import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from '../token.service';
import { BehaviorSubject, throwError } from 'rxjs';
import {  tap } from 'rxjs/operators';



const OAUTH_CLIENT = environment.OAUTH_CLIENT;
const OAUTH_SECRET = environment.OAUTH_SECRET;
// const API_URL = 'orderpanelApi/customer/customerAccount/login';
//const API_URL =  environment.baseUrl ;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public Base_url = environment.baseUrl;
  customerGard = new  BehaviorSubject<any>(null);
  redirectUrl = '';

  private static handleError(error:any): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  constructor(
  private http: HttpClient,
  private tokenService:TokenService
  ) { }


  registration(formData:any){
   return this.http.post( this.Base_url + 'customer/registration', formData);
  }

  resetpass(formData:any){
    return this.http.post( this.Base_url + 'customer/reset-password-otp', formData);
   }

  verifyOtp(formData:any){
    return this.http.post( this.Base_url + 'customer/otpVerify', formData);
  }

  resendOtp(id: number){
    return this.http.get(  this.Base_url + 'customer/resend-otp/' + id );
  }

  login(loginData:any){
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
    .set('username' , loginData.username)
    .set('password' , loginData.password)
    .set('grant_type' , 'password');

    return this.http.post<any>( this.Base_url +'customer/customerAccount/login/oauth/token',body,HTTP_OPTIONS)
.pipe(
  tap((res:any)=>{
    this.tokenService.saveToken(res.access_token);
    this.tokenService.saveRefreshToken(res.refresh_token);
    this.customerGard =  res.access_token;
   })
);
   }


   isLoggedIn(){
     if (this.tokenService.getToken() != null){
       return true;
     }else {
       return false;
     }
  }

  loggedOut(){
    this.tokenService.removeRefreshToken();
    return this.tokenService.removeToken();
  }

  getAppStarter(){
    return this.http.get( this.Base_url + 'banner-list');
  }

}


function catchError(handleError: any): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

