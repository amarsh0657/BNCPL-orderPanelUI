import { environment } from './../../../../environments/environment';
import { GetrequiestService } from './../../../core/customer/getrequiest/getrequiest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
 public   base_ur = environment.baseUrl ;
  constructor(

    private getService: GetrequiestService

  ) { }
  getData:any;

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
