import { AuthService } from './../../core/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit{
  verifyForm: FormGroup;
  user_id: number;
  display: any;
  timenull: boolean;


  constructor( public fb: FormBuilder,
               private route : ActivatedRoute,
               private auth: AuthService,
               private router: Router,
               private toastr: ToastrService  ) { }

  ngOnInit(): void {
    this.timer(1);
    this.verifyForm = this.fb.group({
      otp: ['', [Validators.required ]]
    })



  }

  // this get the Customer Id
  getid(id:any){
    return id;
  }

  onSubmit(){
       const id =  this.route.snapshot.paramMap.get('id');
       const formData = new FormData();
       formData.append('otp', this.verifyForm.get('otp')?.value);
       formData.append('customer_id',  this.getid(id));
       return this.auth.verifyOtp(formData).subscribe(
         (res:any) => {

             this.toastr.success(res.msg);
             this.router.navigate(['thankyou2']);
         },
         (err:any)=>{
           this.toastr.error(err.msg);
         }
       )
  }


   /*  Method Form Count Down And enable ReSend Button  */
   timer(minute: number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec = 60;
    const prefix = minute < 10 ? '0' : '';
    const timer = setInterval(() => {
      seconds--;
      // tslint:disable-next-line: triple-equals
      if (statSec != 0) { statSec--; }
      else { statSec = 59; }
      if (statSec < 10) {
        textSec = '0' + statSec;
      } else { textSec = statSec; }
      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
      // tslint:disable-next-line: triple-equals
      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
        this.timenull = true;

      }
    }, 1000);
  }



  resendLink(){

    const id =  this.route.snapshot.paramMap.get('id');

    return this.auth.resendOtp(this.getid(id)).subscribe(
      (res:any) => {
        this.toastr.success(res.messages);
        this.timer(1);
        this.timenull = false;
      }
    )

  }

}
