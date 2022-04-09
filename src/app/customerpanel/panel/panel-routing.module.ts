import { NotificationsComponent } from './notifications/notifications.component';
import { EstimateComponent } from './estimate/estimate.component';
import { PendingComponent } from './pending/pending.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'order' , loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
  {path: 'pending' , component: PendingComponent},
  {path: 'estimate' , component: EstimateComponent},
  {path: 'notifications' , component: NotificationsComponent},
  {path: 'support' , loadChildren: () => import('./support/support.module').then(m => m.SupportModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
