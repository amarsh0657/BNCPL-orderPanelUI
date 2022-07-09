import {Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import {AddressService} from "../../core/customer/address/address.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderService} from "../../core/customer/order/order.service";


@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.scss']
})
export class OrderAddressComponent implements OnInit {
  private renderer: any;
  status: boolean = false;
  getAddrsData :any;
  getAddressDataById :any;
  getIpData:any;
  tab : any
   addressId: any;
  addAddressForm: FormGroup;
  editAddressForm: FormGroup;
  @Output() addressEvent = new EventEmitter<any>();

  @ViewChild("myNameElem") myNameElem: ElementRef;
  constructor(
    private fb: FormBuilder,
    private address: AddressService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private order: OrderService
  ) { }

  ngOnInit(){

    this.addAddressForm = this.fb.group({
      address: ['',[Validators.required]],
      pen_code: ['',[Validators.required, Validators.maxLength(6)] ],
      city: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
    });

    this.editAddressForm = this.fb.group({
      address: ['',[Validators.required]],
      pen_code: ['',[Validators.required]],
      city: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
    })
    this.getAddressData();
    this.getIpAddressData()
  }


  centerModal(centerDataModal: any) {
    this.modalService.open(centerDataModal, { centered: true });
  }

  getAddressData(){
    return this.address.getAddress().subscribe
    (
      (data:any) => {
        this.getAddrsData = data;
        console.log(this.getAddrsData)
      }
    )
  }

  clickEvent( index:any){
    this.addressId = this.getAddrsData[index]['id']
    this.getAddressDataById = this.getAddrsData[index];

  }

  addAddresaData(){
    const formData = new FormData();
    formData.append('address', this.addAddressForm.get('address')?.value);
    formData.append('pen_code', this.addAddressForm.get('pen_code')?.value);
    formData.append('city', this.addAddressForm.get('city')?.value);
    formData.append('mobile', this.addAddressForm.get('mobile')?.value);
    return this.address.addAddress(formData).subscribe(
      (res:any) => {
        this.toastr.success(res.msg);
        this.getAddressData();
        this.modalService.dismissAll();
        this.addAddressForm.reset()
      }
    )
  }


  editAddresaData(){
    const formData = new FormData();
    formData.append('address', this.editAddressForm.get('address')?.value);
    formData.append('pen_code', this.editAddressForm.get('pen_code')?.value);
    formData.append('city', this.editAddressForm.get('city')?.value);
    formData.append('mobile', this.editAddressForm.get('mobile')?.value);
    return this.address.editAddress(formData, this.addressId).subscribe(
      (res:any) => {
        this.toastr.success(res.msg);
        this.modalService.dismissAll();
        this.addAddressForm.reset()
      }
    )
  }

  deleteAddress(){
    return this.address.deleteAddress(this.addressId).subscribe(
      (data:any) => {
        this.getAddressData();
        this.toastr.success(data.messages.success)
      }
    )
  }


  getIpAddressData(){
    return this.address.getIpAddress().subscribe(
      (data:any) => {
        console.log(data);
        this.getIpData = data;
      }
    )
  }


  //sending address Id
  sendAddressId() {
    this.addressEvent.emit(this.addressId);

  }

}
