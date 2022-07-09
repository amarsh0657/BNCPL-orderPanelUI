import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddressComponent } from './order-address/order-address.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OrderAddressComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    ReactiveFormsModule,
  ],
  exports: [ OrderAddressComponent]
})
export class UtilityModule { }
