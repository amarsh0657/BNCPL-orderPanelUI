import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/core/customer/address/address.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/core/customer/order/order.service';



@Component({
  selector: 'app-estimateorder',
  templateUrl: './estimateorder.component.html',
  styleUrls: ['./estimateorder.component.scss']
})
export class EstimateorderComponent implements OnInit {
  state = "closed";
  addAddressForm: FormGroup;
  editAddressForm: FormGroup;
  checkOutForm: FormGroup ;
  updateId: number;
  getData:any;


  constructor(
    private fb: FormBuilder,
    private address: AddressService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private order: OrderService
  ) { }

  ngOnInit(): void {



    this.checkOutForm = this.fb.group({
      address_id: ['',[Validators.required]],
      order_image: [ null,[Validators.required] ],

    })


    this.addAddressForm = this.fb.group({
      address: ['',[Validators.required]],
      pen_code: ['',[Validators.required, Validators.maxLength(6)] ],
      city: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
    })


    this.editAddressForm = this.fb.group({
      address: ['',[Validators.required]],
      pen_code: ['',[Validators.required]],
      city: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
    })
    this.getAddressData()


  }


  getupdateId( id : number ){
    return  this.updateId = id;
    console.log( this.updateId);
  }

  centerModal(centerDataModal: any) {
    this.modalService.open(centerDataModal, { centered: true });
  }




  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }


  bgchange(e: any) {
    let bodyEl = document.getElementsByTagName('body')[0];
    let currentClass: any = bodyEl.getAttribute('data-bg');
    bodyEl.classList.remove(currentClass)

    let setbg = e.target.getAttribute('data-title');
    if (setbg != '') {
      bodyEl.classList.add(setbg)
      bodyEl.setAttribute('data-bg', setbg);

    }
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


  editAddresaData( id:number){
    const formData = new FormData();
      formData.append('address', this.editAddressForm.get('address')?.value);
      formData.append('pen_code', this.editAddressForm.get('pen_code')?.value);
      formData.append('city', this.editAddressForm.get('city')?.value);
      formData.append('mobile', this.editAddressForm.get('mobile')?.value);
         return this.address.editAddress(formData, id).subscribe(
           (res:any) => {
             this.toastr.success(res.msg);
              this.modalService.dismissAll();
              this.addAddressForm.reset()
           }
         )
      }

  getAddressData(){
    return this.address.getAddress().subscribe
    (
      (data:any) => {
            this.getData = data;
      }
    )
  }


  deleteAddress( id : number){
    return this.address.deleteAddress(id).subscribe(
      (data:any) => {
      this.getAddressData();
      this.toastr.success(data.messages.success)
      }
    )
  }

  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.checkOutForm.patchValue({
        order_image: file
      });
    }
  }

  onSubmitCheckOut(){
    const formData = new FormData();
    formData.append( 'order_image', this.checkOutForm.get('order_image')?.value);
    formData.append( 'address_id', this.checkOutForm.get('address_id')?.value);

   this.order.estimateRequest(formData).subscribe(
     (res:any) => {
        this.toastr.success(res.msg)
        this.checkOutForm.reset();
     }
   )

  }


}
