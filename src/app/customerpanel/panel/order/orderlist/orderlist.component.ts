import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { GetrequiestService } from 'src/app/core/customer/getrequiest/getrequiest.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {

  public getData:any;
  public base_ur = environment.baseUrl;
  constructor(
    private getService: GetrequiestService
  ) { }

  ngOnInit(): void {
  this.getPendingData();
  }

  getPendingData(){
    return this.getService.getPending().subscribe(
      (res:any) => {
        console.log(res);
        this.getData = res;
      }
    )
  }

}
