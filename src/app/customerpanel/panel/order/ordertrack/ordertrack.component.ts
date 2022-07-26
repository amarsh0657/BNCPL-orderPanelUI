import { GetrequiestService } from 'src/app/core/customer/getrequiest/getrequiest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {environment} from "../../../../../environments/environment";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-ordertrack',
  templateUrl: './ordertrack.component.html',
  styleUrls: ['./ordertrack.component.scss']
})
export class OrdertrackComponent implements OnInit {
  public base_ur = environment.baseUrl;
  getdata:any;
  estConfirm: FormGroup;
  estReject: FormGroup;
  modificationForm: FormGroup;
  pinVerify: FormGroup;
  getEstimateDetails: any;
  getEstimateItem:any;
  getEstimateItemDetails: any;
  orderId: any;
  myOrderData:any;
  successClass:any;
  successClass1:any;
  getOrderId:any;
  constructor(
        private getService: GetrequiestService,
        private router : ActivatedRoute,
        private modalService: NgbModal,
        private fb: FormBuilder,
        private ts: ToastrService,
        private routert: Router

  ) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.getDetails( this.getid(id));
    this.getEstItemDetails(this.getid(id));
    this.getOrderId = id;
    //Estimate Confirm
    this.estConfirm = this.fb.group({
      customer_msg : ['Type the message if you are suggesting an improvement or change...']
    })
    //Estimate Reject
    this.estReject = this.fb.group({
      customer_msg : ['Type the message if you are suggesting an improvement or change...']
    })


    this.modificationForm = this.fb.group({
      customer_msg : [null]
    })
    this.pinVerify = this.fb.group({
      pinCode : [null]
    })

  }

 // this get the Customer Id
 getid(id:any){
  return id;
}

  getDetails(id:number){
    return this.getService.getOrderDetails(id).subscribe(
      (res:any) => {
        console.log(res);

        this.getdata = res;
      }
    )
  }


  getEstimateData(orderId:number){
    return this.getService.getEstimateDetails(orderId).subscribe(
      (res:any) => {
        console.log(res);
        this.getEstimateDetails=res;
      }
    )
  }
  centerModal(centerDataModal: any, orderId:any) {
    this.modalService.open(centerDataModal, {size: 'xl',    centered: false });
    this.getEstimateData(orderId);
    this.getEstItemData(orderId);
    this.getEstItemDetails(orderId);
  }




  confirmModal(modal:any, orderId:any){
   this.modalService.open(modal, {size:'xl', centered:false});
   this.orderId = orderId;
  }


  getMyOrderModal(modal:any, orderId:number){
    this.getService.getMyOrderItemDetails(orderId).subscribe((res) =>{
      this.myOrderData = res;
    })
    this.modalService.open(modal, {size:'sm', centered:false});
  }


  getEstItemData(orderId:number){
    return this.getService.getEstimateItem(orderId).subscribe(
      (res:any) => {
        console.log(res);
        this.getEstimateItem=res;
      }
    )
  }


  getEstItemDetails(orderId:number){
    return this.getService.getEstimateItemDetails(orderId).subscribe(
      res => {
          this.getEstimateItemDetails =res;

        if(this.getEstimateItemDetails[0]['delivery_status'] === 'onWay'){
          this.successClass ="border-success";
        }
        if(this.getEstimateItemDetails[0]['estimate_status'] === 'delivered'){
          this.successClass1 ="border-success";
        }

       //   console.log(this.getEstimateItemDetails.length)


      }
    )
  }

  //Estimate Confirm
  onSubEstConfirm(){
     const  formData = new FormData();
     formData.append('customer_msg' , this.estConfirm.get('customer_msg')?.value)

    return this.getService.confirmEst(this.orderId, formData).subscribe(
      (res:any)=>{
          this.ts.success(res.msg);
          this.modalService.dismissAll();
          this.getDetails(this.orderId);
          this.getEstItemDetails(this.orderId);

      }
    )
  }

  //Estimate Confirm
  onSubEstReject(){
    const  formData = new FormData();
    formData.append('customer_msg' , this.estReject.get('customer_msg')?.value)

    return this.getService.rejectEst(this.orderId, formData).subscribe(
      (res:any)=>{
        this.ts.success(res.msg);
        this.modalService.dismissAll();
        this.getDetails(this.orderId);
        this.getEstItemDetails(this.orderId);

      }
    )
  }

  //Estimate Confirm

  onSubModification(){
    const  formData = new FormData();
    formData.append('customer_msg' , this.modificationForm.get('customer_msg')?.value)

    return this.getService.modificationEst(this.orderId, formData).subscribe(
      (res:any)=>{
        this.ts.success(res.msg);
        this.modalService.dismissAll();
        this.getEstItemDetails(this.orderId);


      }
    )
  }

  onPinSubmit(){
    const  formData = new FormData();
    formData.append('pin_code' , this.pinVerify.get('pinCode')?.value)

   return  this.getService.deliveryAction(this.getOrderId,formData).subscribe(
      (res:any)=>{
        this.ts.success(res.msg);
        this.routert.navigate(['/panel/order/order-track/' +this.getOrderId ]);
      }
      ,
      (error:any )=> {
      //  console.log(error.error.messages.msg);
        this.ts.error(error.error.messages.msg)
      }
    )

    alert(JSON.stringify(this.pinVerify.value));

  }

}
