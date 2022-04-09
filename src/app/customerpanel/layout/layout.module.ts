import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './patials/sidebar/sidebar.component';
import { HeadermenuComponent } from './patials/headermenu/headermenu.component';
import { StaticfooterComponent } from './patials/staticfooter/staticfooter.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeadermenuComponent,
    StaticfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
