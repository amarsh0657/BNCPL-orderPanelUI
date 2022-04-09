import { OrdertrackComponent } from './ordertrack/ordertrack.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateorderComponent } from './estimateorder/estimateorder.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
        {  path : 'estimateorder', component: EstimateorderComponent},
        {  path : 'checkout', component: CheckoutComponent},
        {  path : 'order-list', component: OrderlistComponent},
        { path : 'order-track/:id' , component: OrdertrackComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
