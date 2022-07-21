import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: ()=>import('./feature-modules/user/user.module').then(m=>m.UserModule) },
  { path: 'auth', loadChildren: ()=>import('./feature-modules/auth/auth.module').then(m=>m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
