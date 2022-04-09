import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {



  constructor() { }
  @Input() orderId:string;
  @Input() img_path:string;
  @Input() status:string;
  @Input() date:string;

  ngOnInit(): void {
  }

}
