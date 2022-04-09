import { SupportService } from './../../../../core/customer/support/support.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
getData:any;
  constructor(
    private ss: SupportService
  ) { }

  ngOnInit() {
this.ss.getCustomerReply().subscribe(
  (res:any) => {
    this.getData = res;
  }
)

  }

}
