import { environment } from './../../../../environments/environment';
import { TokenService } from './../../token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }


  checOutRequest( formData:any){
        return this.http.post( environment.baseUrl + 'customer/orderImage-to-invoice/'  + this.token.getRefreshToken() , formData)
  }

  estimateRequest( formData:any){
    return this.http.post( environment.baseUrl + 'customer/orderimage/'  + this.token.getRefreshToken() , formData)
}
  estimateTypeRequest( formData:any){
    return this.http.post( environment.baseUrl + 'customer/ordertype/'  + this.token.getRefreshToken() , formData)
  }


}
