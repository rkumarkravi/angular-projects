import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common-module/material/material.module';
import { CommonServService } from './service/common-serv.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercept } from './interceptors/http-intercept';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    CommonServService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercept,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
