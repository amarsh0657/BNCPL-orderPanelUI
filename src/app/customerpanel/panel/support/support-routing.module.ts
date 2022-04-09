import { SendComponent } from './send/send.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path : 'compose' , component : ComposeComponent},
{ path : 'inbox' , component : InboxComponent},
{ path : 'send' , component : SendComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
