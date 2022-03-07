import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const importModules = [MaterialModule, ReactiveFormsModule, FormsModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...importModules],
  exports: [importModules],
})
export class SharedModule {}
