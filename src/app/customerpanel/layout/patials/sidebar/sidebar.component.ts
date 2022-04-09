import { ProfileService } from './../../../../core/customer/profile/profile.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from './../../../../core/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  getProfileData: any;
  routerLink = '/panel';
  constructor(  private auth: AuthService,
                private router: Router,
                private toastr: ToastrService,
                private profile: ProfileService
                ) { }

  ngOnInit(): void {
    this.getProfile();
  }


  menuclose() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('menu-open');
  }

  onClick(){
    this.auth.loggedOut();
    this.toastr.success("You are successfully Logout ")
     return this.router.navigate(['/signin']);
  }

  getProfile(){
    return this.profile.getProfile().subscribe(
      (res:any) => {
        this.getProfileData = res;

      }
    )
  }


}
