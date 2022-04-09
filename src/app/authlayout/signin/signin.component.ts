import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  loginForm: FormGroup;

  constructor(
   private fb: FormBuilder,
   private auth: AuthService,
   private toastr: ToastrService,
   private router: Router

  ) { }

  ngOnInit(): void {
this.loginForm = this.fb.group({
  username: [null, Validators.compose([Validators.required, Validators.email]) ],
  password: [null, [Validators.required,] ]
})
  }

  login(){

  console.log(this.loginForm.value);

    // const grand_type = 'password';
    // const formdata = new FormData();
    // formdata.append('username', this.loginForm.get('username')?.value);
    // formdata.append('password', this.loginForm.get('password')?.value);
    // formdata.append('grant_type', grand_type );


    return this.auth.login(this.loginForm.value).subscribe(
      (res:any) => {
        this.toastr.success('Your Are SuccessFully Login ');
        this.router.navigate(['/panel']);
      },
      (err:any) =>{
        //console.log(err.error.error_description);

         this.toastr.error(err.error.error_description);

      }
    )



  }



}
