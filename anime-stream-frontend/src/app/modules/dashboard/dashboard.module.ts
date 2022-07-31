import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { AnimeViewerComponent } from './components/anime-viewer/anime-viewer.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, AnimeCardComponent, AnimeViewerComponent],
})
export class DashboardModule {}
