import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialModule } from './../../shared-modules/material.module';
import { UserRoutes } from './user.routing';
import { TileComponent } from './components/tile/tile.component';
import { TodoNodeAddComponent, TodosComponent } from './pages/todos/todos.component';
import { TodoNodeComponent } from './components/todo-node/todo-node.component';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { AbsenceComponent } from './pages/absence/absence.component';
@NgModule({
  imports: [
CommonModule,
    MaterialModule,
    UserRoutes,
    SharedModule
  ],
  declarations: [
    UserComponent,
    TileComponent,
    TodosComponent,
    TodoNodeComponent,
    TodoNodeAddComponent,
    AbsenceComponent,
  ]
})
export class UserModule { }
