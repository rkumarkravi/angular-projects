import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './modules/pages/album/album.component';
import { CreatePlaylistComponent } from './modules/pages/create-playlist/create-playlist.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { SearchComponent } from './modules/pages/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'upload',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'create-playlist',
    component: CreatePlaylistComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'album',
    component: AlbumComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
