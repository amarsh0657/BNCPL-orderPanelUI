import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormArray } from '@angular/forms';
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
  breadCrumbItems: Array<{}>;
  isCollapsed: boolean;
  state = "closed";
  checkOutForm: FormGroup ;
  updateId: number;
  getData:any;
  addressId:any;
  visible = false;

  constructor(
    private fb: FormBuilder,
    private address: AddressService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private order: OrderService
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { active: true }];
    this.isCollapsed = false;
    this.checkOutForm = this.fb.group({
      address_id: [''],
      order_image: [ null,[Validators.required] ],
    })

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





  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.checkOutForm.patchValue({
        order_image: file
      });
    }
  }

  onSubmitImg(){
      this.visible = true;
    if(this.addressId == undefined){
      this.toastr.info("Could you please select the Address!")
      this.visible = false;
    }else {

    const formData = new FormData();
    formData.append( 'order_image', this.checkOutForm.get('order_image')?.value);
    formData.append( 'address_id', this.addressId);

   this.order.estimateRequest(formData).subscribe(
     (res:any) => {
        this.toastr.success(res.msg)
        this.checkOutForm.reset();
        this.addressId = undefined
        this.visible = false;
     },
     error => {
       this.visible = false;
     }
   )
    }

  }

  receiveAddressEvent(event:any){
     this.addressId = event;
     return this.addressId;
  }

  chengingAction(){
    if(this.addressId != undefined){
      this.addressId = undefined;
    }
  }

}
