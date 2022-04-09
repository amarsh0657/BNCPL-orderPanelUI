import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { EstimateorderComponent } from './estimateorder/estimateorder.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdertrackComponent } from './ordertrack/ordertrack.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    EstimateorderComponent,
    OrderlistComponent,
    OrdertrackComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule

  ]
})
export class OrderModule { }
