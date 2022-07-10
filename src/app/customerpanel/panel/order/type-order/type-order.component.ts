import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {OrderService} from "../../../../core/customer/order/order.service";


@Component({
  selector: 'app-type-order',
  templateUrl: './type-order.component.html',
  styleUrls: ['./type-order.component.scss']
})
export class TypeOrderComponent implements OnInit {
  typeOrderFrom: FormGroup;
  addressId:any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private order: OrderService
  ) {
    this.typeOrderFrom = this.fb.group({
      multiItem: this.fb.array([this.field()]),
      addressId: [this.addressId]
    })
  }

  ngOnInit(): void {

  }


  field(): FormGroup {
    return this.fb.group({
      itemName : [],
      quantity: [],
    });
  }

  addMore() {
    this.productDetails().push(this.field());
  }

  deletePhone(i: number) {
    this.productDetails().removeAt(i);
  }

  productDetails(): FormArray {
    return this.typeOrderFrom.get('multiItem') as FormArray;
  }


  onSubmit(){
    if(this.addressId == undefined) {
      this.toastr.info("Could you please select the Address!")
    }else {
      const formData = new FormData();
    formData.append('multiItem',JSON.stringify(this.typeOrderFrom.get('multiItem')?.value)  )
    formData.append('addressId', this.addressId )
    alert( JSON.stringify(this.typeOrderFrom.value));

      this.order.estimateTypeRequest(formData).subscribe(
        (res:any) => {
          this.toastr.success(res.msg)
          this.typeOrderFrom.reset();
          this.addressId = undefined
        }
      )
    }
  }

  receiveAddressEvent(event:any){
    this.addressId = event;
    alert(this.addressId)
    return this.addressId;
  }

}
