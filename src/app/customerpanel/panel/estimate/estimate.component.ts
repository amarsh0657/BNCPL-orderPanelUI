import { environment } from './../../../../environments/environment';
import { GetrequiestService } from './../../../core/customer/getrequiest/getrequiest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {

  public base_ur = environment.baseUrl;
  getData:any;
  constructor(
    private getService: GetrequiestService
  ) { }

  ngOnInit(): void {
    this.getEstimateData();
  }



  getEstimateData(){
    return this.getService.getEstimate().subscribe(
      (res:any) => {
        console.log(res);
        this.getData = res;
      }
    )
  }

}
