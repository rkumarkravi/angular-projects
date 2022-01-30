import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTimelineComponent } from './main-timeline.component';

const routes: Routes = [{ path: '', component: MainTimelineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainTimelineRoutingModule { }
