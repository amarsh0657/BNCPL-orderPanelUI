
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { NouisliderModule } from 'ng2-nouislider';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { Daterangepicker } from 'ng2-daterangepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AuthlayoutModule } from './authlayout/authlayout.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerpanelModule } from './customerpanel/customerpanel.module';
import { ServiceWorkerModule } from '@angular/service-worker';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AuthlayoutModule,
    AppRoutingModule,
    SwiperModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    NouisliderModule,
    FullCalendarModule,
    Daterangepicker,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CustomerpanelModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
