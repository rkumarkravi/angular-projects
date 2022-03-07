import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ShowAllEmployeesComponent } from './comps/show-all-employees/show-all-employees.component';
import { SingleEmpModifyShowComponent } from './comps/single-emp-modify-show/single-emp-modify-show.component';

@NgModule({
  declarations: [AppComponent, ShowAllEmployeesComponent, SingleEmpModifyShowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
