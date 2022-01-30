import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login-reg/access.module').then((m) => m.AccessModule),
  },
  {
    // path: 'main-timeline',
    path: '',
    loadChildren: () =>
      import('./main-timeline/main-timeline.module').then(
        (m) => m.MainTimelineModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
