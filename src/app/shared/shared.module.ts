import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LogoComponent,
    LoaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LogoComponent,  LoaderComponent, CardComponent]
})
export class SharedModule { }
