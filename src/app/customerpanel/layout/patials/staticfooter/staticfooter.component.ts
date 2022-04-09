import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staticfooter',
  templateUrl: './staticfooter.component.html',
  styleUrls: ['./staticfooter.component.scss']
})
export class StaticfooterComponent implements OnInit {
  public isVisited = false;
  constructor() { }

  ngOnInit(): void {

    const myModalEl = document.getElementsByClassName('menumodal')[0];
    const myModalBtn = document.getElementsByClassName('centerbtn')[0];
    myModalEl.addEventListener('hidden.bs.modal', function (event:any) {
      myModalBtn.classList.remove('active')
    })
  }

  checkVisited() {
    const myModalBtn = document.getElementsByClassName('centerbtn')[0];
    myModalBtn.classList.add('active')
  }

}
