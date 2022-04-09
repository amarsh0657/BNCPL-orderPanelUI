import { Observable } from 'rxjs';
import { DashboardService } from './../../core/customer/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Dasboard } from 'src/app/core/customer/dashboard/dashboard';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public  Base_url = environment.baseUrl;

  isChecked: boolean = false;
  public getDashboardData: Observable<Dasboard[]> ;
  public getProduct: any;
 public getBrandData : any;
  public getOfferData : any;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getloadData();
    this.getProductData();
    this.getBrandAllData();
    this.getOfferAllData();
  }

  doCheck() {
    let html = document.getElementsByTagName('html')[0];
    this.isChecked = !this.isChecked;
    if (this.isChecked == true) {
      html.classList.add('dark-mode');
    } else {
      html.classList.remove('dark-mode');
    }
  }


  getloadData(){
      return this.getDashboardData = this.dashboardService.getDashboard();
  }

  getProductData(){
    return this.dashboardService.getProduct().subscribe(
      (res:any)=>{
          console.log(res);
         this.getProduct = res;
      }
    )
  }

  getBrandAllData(){
    return this.dashboardService.getBrand().subscribe(
      (res:any)=>{
        this.getBrandData = res;
      }
    )
  }

  getOfferAllData(){
    return this.dashboardService.getOffer().subscribe(
      (res:any)=>{
        this.getOfferData = res;
      }
    )
  }




}
