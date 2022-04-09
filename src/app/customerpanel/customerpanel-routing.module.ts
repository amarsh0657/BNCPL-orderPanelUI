import { AuthGuard } from './../core/guard/auth.guard';
import { LayoutModule } from './layout/layout.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [

  {path: 'panel', component: LayoutComponent, loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)
, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerpanelRoutingModule { }
