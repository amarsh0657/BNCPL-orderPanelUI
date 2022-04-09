import { environment } from './../../../environments/environment';
import { GetrequiestService } from 'src/app/core/customer/getrequiest/getrequiest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  base_url = environment.baseUrl;

  show:boolean = true;

getData:any;
getPayment:any;
  constructor(
    private getRequestService: GetrequiestService
  ) { }

  ngOnInit(): void {
    this.getRequestService.getNotificationCount().subscribe(
      (res:any) => {
        console.log(res);
        this.getData = res;
      }
    )
    this.getRequestService.getPaymentDetails().subscribe(
      (res:any) => {
        console.log(res);
        this.getPayment = res;
      }
    )
  }

  onClick( boolean:boolean){
    this.show = boolean;
  }

}
