import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DumbCompsModule } from './../dumb-comps/dumb-comps.module';
import { MainModule } from './../main-comps/main.module';
@NgModule({
  imports: [CommonModule, DumbCompsModule, MainModule],
  exports: [AlbumComponent, SearchComponent, HomePageComponent],
  declarations: [AlbumComponent, SearchComponent, HomePageComponent],
})
export class PagesModule {}
