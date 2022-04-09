import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
} from 'swiper/core';
import {AuthService} from "../../core/auth/auth.service";
import {GetrequiestService} from "../../core/customer/getrequiest/getrequiest.service";
import {environment} from "../../../environments/environment";
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  loadBanner:any;
  base_url = environment.baseUrl;

  constructor(
    private gs: GetrequiestService
  ) { }

  ngOnInit(){
 this.getBannerData();
  }

  ngAfterViewInit(): void {
    var paginations = document.getElementsByClassName('swiper-pagination')[0];
    paginations.classList.add('pagination-rightnumber');
  }

  pagination = {
    clickable: true,
    renderBullet: function (index:any, className:any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

getBannerData(){
 this.gs.getStarter().subscribe(
     (res:any) => {
       console.log(res);
       this.loadBanner = res;
     }
   )
}

}
