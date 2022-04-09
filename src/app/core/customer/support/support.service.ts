import { environment } from './../../../../environments/environment';
import { TokenService } from './../../token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor( private http: HttpClient,
               private token: TokenService) { }

               compose(formData:any){
                   return this.http.post(environment.baseUrl + 'customer/support/' + this.token.getRefreshToken(), formData)
               }
               getAdminReply(){
                 return this.http.get( environment.baseUrl + 'customer/get-reply-data/' + this.token.getRefreshToken());
               }
               getCustomerReply(){
                return this.http.get( environment.baseUrl + 'customer/get-support-data/' + this.token.getRefreshToken());
              }
}
