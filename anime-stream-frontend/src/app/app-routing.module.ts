import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/AuthGuard';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:"full"},
  {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),},
  {path:'dashboard',loadChildren:()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
