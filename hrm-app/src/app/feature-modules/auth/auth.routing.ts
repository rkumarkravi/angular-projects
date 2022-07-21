import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
];

export const AuthRoutes = RouterModule.forChild(routes);
