import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { MaterialModule } from './../../shared-modules/material.module';

@NgModule({
  imports: [
  CommonModule,
    AuthRoutes,
    SharedModule,
    MaterialModule
  ],
  declarations: [AuthComponent],
})
export class AuthModule { }
