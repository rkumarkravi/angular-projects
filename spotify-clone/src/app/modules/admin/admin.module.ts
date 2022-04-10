import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppAdminRoutingModule } from './admin-routing.module';
import { ShowAlbumsComponent } from './admin-comps/show-albums/show-albums.component';
import { CreateModifyAlbumComponent } from './admin-comps/create-modify-album/create-modify-album.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
@NgModule({
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTreeModule,
  ],
  declarations: [
    AdminComponent,
    ShowAlbumsComponent,
    CreateModifyAlbumComponent,
  ],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
