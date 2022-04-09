import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerpanelRoutingModule } from './customerpanel-routing.module';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { SwiperModule } from 'swiper/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
;


@NgModule({
  declarations: [
     DashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerpanelRoutingModule,
    NgCircleProgressModule.forRoot(),
    SwiperModule,
    LayoutModule,
    NgxSkeletonLoaderModule
  ]
})
export class CustomerpanelModule { }
