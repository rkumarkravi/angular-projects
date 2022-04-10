import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ControlComponent } from './control/control.component';
import { DumbCompsModule } from './../dumb-comps/dumb-comps.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [SideNavComponent, NavBarComponent, ControlComponent],
  imports: [
    CommonModule,
    DumbCompsModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [SideNavComponent, NavBarComponent, ControlComponent],
})
export class MainModule {}
