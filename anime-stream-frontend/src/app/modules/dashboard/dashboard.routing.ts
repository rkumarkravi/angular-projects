import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnimeViewerComponent } from './components/anime-viewer/anime-viewer.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'animeviewer/:id', component: AnimeViewerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
