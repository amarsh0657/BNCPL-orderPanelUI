import { ToastrService } from 'ngx-toastr';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/core/customer/support/support.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  supportFormData: FormGroup;
  constructor(
    private fb : FormBuilder,
    private ss : SupportService,
  private _t: ToastrService
    ) { }

  ngOnInit(): void {
    this.supportFormData = this.fb.group({
      title : ['' , [Validators.required]],
      support_Msg : ['' , [Validators.required]]
    })
  }

  onSend(){
    const formdata = new FormData();
    formdata.append('title', this.supportFormData.get('title')?.value);
    formdata.append('support_Msg', this.supportFormData.get('support_Msg')?.value);


  return this.ss.compose(formdata).subscribe(
    (res:any) => {
            this._t.success(res.message);
            this.supportFormData.reset();

    }
  )
  }



}
