import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { UserComponent } from './user.component';
import { AbsenceComponent } from './pages/absence/absence.component';

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'absence', component: AbsenceComponent }
];

export const UserRoutes = RouterModule.forChild(routes);
