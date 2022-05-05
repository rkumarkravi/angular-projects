import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { DumbCompsModule } from './../dumb-comps/dumb-comps.module';
import { AddToPlaylistDialogComponent } from './add-to-playlist-dialog/add-to-playlist-dialog.component';
import { ControlComponent } from './control/control.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
@NgModule({
  declarations: [SideNavComponent, NavBarComponent, ControlComponent,AddToPlaylistDialogComponent],
  imports: [
    CommonModule,
    DumbCompsModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [SideNavComponent, NavBarComponent, ControlComponent,AddToPlaylistDialogComponent],
})
export class MainModule {}
