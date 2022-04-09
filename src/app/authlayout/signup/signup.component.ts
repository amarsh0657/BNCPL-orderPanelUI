import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var tooltiptriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltiptriggerList.map(function (e:any) {
      return new bootstrap.Tooltip(e)
    });



    this.createForm = this.fb.group({
      name : ['' ,[ Validators.required, Validators.maxLength(20), Validators.minLength(4) , Validators.pattern(/^[a-zA-Z*()]+$/) ]],
      email : ['' ,[ Validators.required, Validators.email]],
      mobile : ['' ,[ Validators.required, Validators.minLength(10),  Validators.pattern(/^[6-9]\d{9}$/),  ]],
      password : ['' ,[ Validators.required]],
    })
  }


  registerForm(){
    const formData = new FormData();
    formData.append('name', this.createForm.get('name')?.value);
    formData.append('email', this.createForm.get('email')?.value);
    formData.append('mobile', this.createForm.get('mobile')?.value);
    formData.append('password', this.createForm.get('password')?.value);
    return this.auth.registration(formData).subscribe(
      (res:any) =>{
           this.toastr.success( res.msg);
           this.router.navigate(['verify',res.user]);
      },
      (err:any) => {
         console.log(err);
         this.toastr.error( "somthing Error ");
       // this.toastr.error( );
      }
    )

  }

  goToOtpVerification(){
    //this.router.navigate(['verify'], { relativeTo: this.router})
  }

}
