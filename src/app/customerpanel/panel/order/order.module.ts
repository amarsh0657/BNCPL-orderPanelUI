import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { EstimateorderComponent } from './estimateorder/estimateorder.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdertrackComponent } from './ordertrack/ordertrack.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "../../../shared/shared.module";
import { TypeOrderComponent } from './type-order/type-order.component';
import {UtilityModule} from "../../../utility/utility.module";


@NgModule({
  declarations: [
    CheckoutComponent,
    EstimateorderComponent,
    OrderlistComponent,
    OrdertrackComponent,
    TypeOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgbNavModule,
    ReactiveFormsModule,
    UtilityModule

  ]
})
export class OrderModule { }
