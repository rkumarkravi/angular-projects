import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { AnimeViewerComponent } from './components/anime-viewer/anime-viewer.component';
import { MaterialModule } from './../material/material.module';
import { VideosNavComponent } from './components/videos-nav/videos-nav.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
  declarations: [
    DashboardComponent,
    AnimeCardComponent,
    AnimeViewerComponent,
    VideosNavComponent,
  ],
})
export class DashboardModule {}
