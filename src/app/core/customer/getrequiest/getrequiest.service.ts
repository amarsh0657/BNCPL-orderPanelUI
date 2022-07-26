import { environment } from './../../../../environments/environment';
import { TokenService } from './../../token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetrequiestService {

  constructor(private http: HttpClient,
              private token: TokenService) { }

              getPending(){
                return this.http.get( environment.baseUrl + 'customer/order-pending/' + this.token.getRefreshToken());
              }

              getEstimate(){
                return this.http.get( environment.baseUrl + 'customer/estimate/' + this.token.getRefreshToken());
              }

              getNotification(){
                return this.http.get( environment.baseUrl + 'customer/notify/' + this.token.getRefreshToken());
              }

              getNotificationCount(){
                return this.http.get( environment.baseUrl + 'customer/notify-count/' + this.token.getRefreshToken());
              }

              postNotification(id:any){
                return this.http.post( environment.baseUrl + 'customer/notify/action/' + id, id);
              }


              getPaymentDetails(){
                return this.http.get( environment.baseUrl + 'setting/admin/get-payment-setting' );
              }

              getOrderDetails(id:number){
                return this.http.get( environment.baseUrl + 'customer/get-by-orderID/' + id );
              }


  getStarter(){
    return this.http.get( environment.baseUrl + 'banner-list');
  }



  getEstimateDetails(orderId: number){
    return  this.http.get( environment.baseUrl + 'admin/order-details/' + orderId);
  }

  getEstimateItem(orderId: number){
    return  this.http.get( environment.baseUrl + 'get-Estimate-item/' + orderId);
  }
  getEstimateItemDetails(orderId: number){
    return  this.http.get( environment.baseUrl + 'customer/get-order-details/' + orderId);
  }
  getMyOrderItemDetails(orderId: number){
    return  this.http.get( environment.baseUrl + 'customer/get-myOrder-details/' + orderId);
  }

  confirmEst(orderId:any, formData:any){
    return this.http.post( environment.baseUrl + 'customer/estimate-conformation/' + orderId, formData);
  }

  rejectEst(orderId:any, formData:any){
    return this.http.post( environment.baseUrl + 'customer/estimate-rejection/' + orderId, formData);
  }

  modificationEst(orderId:any, formData:any){
    return this.http.post( environment.baseUrl + 'customer/estimate-modification/' + orderId, formData);
  }

  deliveryAction(orderId:any, formData:any){
    return this.http.post( environment.baseUrl + 'customer/delivered/' + orderId, formData);
  }
}
