import { AuthGuard } from './core/guard/auth.guard';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '**', loadChildren: () => import('./authlayout/authlayout.module').then(m => m.AuthlayoutModule) },
  { path: 'home', loadChildren: () => import('./customerpanel/customerpanel.module').then(m => m.CustomerpanelModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
