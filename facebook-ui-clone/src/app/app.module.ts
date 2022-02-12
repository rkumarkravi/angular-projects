import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common-module/material/material.module';
import { CommonServService } from './service/common-serv.service';
import { ErrorPageComponent } from './error-page/error-page.component';
@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [CommonServService],
  bootstrap: [AppComponent],
})
export class AppModule {}
