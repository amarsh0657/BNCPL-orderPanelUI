import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { PendingComponent } from './pending/pending.component';
import { EstimateComponent } from './estimate/estimate.component';
import { NotificationsComponent } from './notifications/notifications.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PendingComponent,
    EstimateComponent,
    NotificationsComponent,


  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    NgCircleProgressModule.forRoot(),
    SwiperModule,
    SharedModule,
    ReactiveFormsModule,

  ]
})
export class PanelModule { }
