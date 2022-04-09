import { Dasboard } from './dashboard';
import { Observable } from 'rxjs';
import { TokenService } from './../../token.service';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor( private http: HttpClient,
               private token: TokenService) { }

  getDashboard( ): Observable<Dasboard[]>{
     return this.http.get<Dasboard[]>( environment.baseUrl + 'customer/dashboard/' + this.token.getRefreshToken());
  }

  getProduct(){
    return this.http.get( environment.baseUrl + 'admin/productlist' )
  }
  getBrand(){
    return this.http.get( environment.baseUrl + 'brand-list')
  }

  getOffer(){
    return this.http.get( environment.baseUrl + 'offer-list')
  }


}
