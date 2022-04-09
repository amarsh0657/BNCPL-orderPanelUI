import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './../../../core/customer/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 public getProfile:any;
 editProfile: FormGroup;
 //public show : boolean;


 public show:boolean = false;
 public buttonName:any = 'Show';
  constructor(
    private profile: ProfileService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.editProfile = this.fb.group({
      name: ['',[ Validators.required]],
      address: ['', [Validators.required]],
      profileImage: [ null ]
    })

    this.getProfileData();


  }

  getProfileData(){
    this.profile.getProfile().subscribe(
      (data:any) => {
        this.getProfile = data;
      }
    )
  }


  onClick(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editProfile.patchValue({
        profileImage: file
      });
    }
  }



 onSubmit(){

  const formData = new FormData();
  formData.append( 'name', this.editProfile.get('name')?.value);
  formData.append( 'address', this.editProfile.get('address')?.value);
  formData.append( 'profileImage', this.editProfile.get('profileImage')?.value);

return this.profile.updateProfile(formData).subscribe(
  (data:any) => {

    this.toastr.success(data.msg);
    this.getProfileData();
    this.onClick();
  },(error: any) =>{


      this.toastr.error('Profile Image  is not a valid uploaded file.');

  }
)
 }


}
