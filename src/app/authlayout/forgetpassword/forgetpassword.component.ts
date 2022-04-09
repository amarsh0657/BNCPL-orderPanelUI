import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  createForm: FormGroup;
  constructor(private fb: FormBuilder,
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
      email : ['' ,[ Validators.required, Validators.email]]
    })

  }

  forgetForm(){

    const formData = new  FormData();
    formData.append('email', this.createForm.get('email')?.value)

    return this.auth.resetpass(formData).subscribe(
      (res:any) => {
        console.log(res);

      }
    )

  }






}
