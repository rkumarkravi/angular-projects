import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track/track.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IconWithNameComponent } from './icon-with-name/icon-with-name.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderAlbumPlaylistComponent } from './header-album-playlist/header-album-playlist.component';

@NgModule({
  declarations: [
    TrackComponent,
    GreetingComponent,
    IconWithNameComponent,
    HeaderAlbumPlaylistComponent,
  ],
  imports: [CommonModule, MatIconModule, MatCardModule],
  exports: [
    TrackComponent,
    GreetingComponent,
    IconWithNameComponent,
    HeaderAlbumPlaylistComponent,
  ],
})
export class DumbCompsModule {}
