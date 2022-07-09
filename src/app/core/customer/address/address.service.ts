import { environment } from './../../../../environments/environment';
import { TokenService } from './../../token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const OAUTH_CLIENT = environment.OAUTH_CLIENT;
const OAUTH_SECRET = environment.OAUTH_SECRET;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, DELETE',
    'Content-Length': '96',
    'Access-Control-Allow-Headers' : 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
  })
};


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient,
              private token: TokenService) { }

              getAddress(){
                return this.http.get( environment.baseUrl + 'customer/get-address/' + this.token.getRefreshToken());
              }

              addAddress( formData:any){
                return this.http.post( environment.baseUrl + 'customer/add-address/' + this.token.getRefreshToken(), formData);
              }

              editAddress( formData:any, id: number){
                return this.http.post( environment.baseUrl + 'customer/update-address/' + this.token.getRefreshToken() + '/' + id, formData);
              }
              deleteAddress(id:number){
                return this.http.get( environment.baseUrl + 'customer/delete-address/' + id);
              }


              getIpAddress(){
               return this.http.get('https://ipapi.co/json');
              }

}
