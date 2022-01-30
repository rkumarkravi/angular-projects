import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../common-module/material/material.module';

@NgModule({
  declarations: [AccessComponent, LoginComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    MaterialModule
  ],
  bootstrap: [AccessComponent],
})
export class AccessModule {}
