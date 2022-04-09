
import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/core/customer/support/support.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {


  getData: any;
  constructor(
    private ss: SupportService
  ) { }

  ngOnInit(): void {
    this.ss.getAdminReply().subscribe(
      (res:any) => {
        console.log(res)
        this.getData =res;
      }
    )
  }



}
