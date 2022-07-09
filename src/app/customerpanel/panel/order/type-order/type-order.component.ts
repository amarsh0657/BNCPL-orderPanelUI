import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-type-order',
  templateUrl: './type-order.component.html',
  styleUrls: ['./type-order.component.scss']
})
export class TypeOrderComponent implements OnInit {

  form = new FormGroup({
    member: new FormArray([
      new FormControl(''),
    ]),
  });

  get member(): FormArray { return this.form.get('member') as FormArray; }
  addMember() {
    this.member.push(new FormControl());
  }
  deleteMember(i: number) {
    this.member.removeAt(i);
  }

  constructor() { }

  ngOnInit(): void {


  }

}
