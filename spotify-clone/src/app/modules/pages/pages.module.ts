import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DumbCompsModule } from './../dumb-comps/dumb-comps.module';
import { MainModule } from './../main-comps/main.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { CreatePlaylistComponent, ExtraMenuRendererComponent } from './create-playlist/create-playlist.component';
import {MatMenuModule} from '@angular/material/menu';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  imports: [CommonModule, DumbCompsModule, MainModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,MatButtonModule,AgGridModule,MatMenuModule],
  exports: [AlbumComponent, SearchComponent, HomePageComponent,LoginComponent,CreatePlaylistComponent,ExtraMenuRendererComponent],
  declarations: [AlbumComponent, SearchComponent, HomePageComponent,LoginComponent,CreatePlaylistComponent,ExtraMenuRendererComponent],
})
export class PagesModule {}
