import { Component, OnInit } from '@angular/core';
import { GetrequiestService } from 'src/app/core/customer/getrequiest/getrequiest.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
getData:any;
  constructor(

    private getRequest: GetrequiestService
  ) { }

  ngOnInit(): void {
    this.getNotify();


  }

  onClick(id:any){
    return this.getRequest.postNotification(id).subscribe(
             (res:any) => {
              this.getNotify();
             }
    )
  }

  getNotify(){
    this.getRequest.getNotification().subscribe(
      (res:any) => {
        console.log(res);
        this.getData = res;
      }
    )
  }

}
