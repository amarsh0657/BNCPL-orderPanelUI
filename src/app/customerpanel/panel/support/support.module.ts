import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendComponent } from './send/send.component';


@NgModule({
  declarations: [
    ComposeComponent,
    InboxComponent,
    SendComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    ReactiveFormsModule
  ]
})
export class SupportModule { }
