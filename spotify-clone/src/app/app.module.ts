import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main-comps/main.module';
import { PagesModule } from './modules/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AgGridModule } from 'ag-grid-angular';
import { UserCheckInterceptor } from './core/interceptors/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: UserCheckInterceptor,
    multi: true
  }  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
