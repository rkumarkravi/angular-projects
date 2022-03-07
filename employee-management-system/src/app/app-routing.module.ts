import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowAllEmployeesComponent } from './comps/show-all-employees/show-all-employees.component';
import { SingleEmpModifyShowComponent } from './comps/single-emp-modify-show/single-emp-modify-show.component';

const routes: Routes = [
  { path: '', component: ShowAllEmployeesComponent },
  {
    path: 'insert',
    component: SingleEmpModifyShowComponent,
  },
  {
    path: 'update/:id',
    component: SingleEmpModifyShowComponent,
  },
  { path: 'detail/:id', component: SingleEmpModifyShowComponent },
  { path: '**', component: ShowAllEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
