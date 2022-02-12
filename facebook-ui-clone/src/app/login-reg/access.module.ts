import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../common-module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccessComponent, LoginComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AccessComponent],
})
export class AccessModule {}
