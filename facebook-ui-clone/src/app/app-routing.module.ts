import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AlreadyLoginGuard } from './guards/already-login.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-reg/access.module').then((m) => m.AccessModule),
    canActivate: [AlreadyLoginGuard],
  },
  {
    path: 'main-timeline',
    loadChildren: () =>
      import('./main-timeline/main-timeline.module').then(
        (m) => m.MainTimelineModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
