import { environment } from './../../../../environments/environment';
import { TokenService } from './../../token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,
              private token : TokenService) { }
              getProfile(){
                     return this.http.get( environment.baseUrl + 'customer/profile/' + this.token.getRefreshToken());
              }

              updateProfile( formData: any){
                 return  this.http.post( environment.baseUrl + 'customer/update-profile/' + this.token.getRefreshToken(), formData)
              }
}
