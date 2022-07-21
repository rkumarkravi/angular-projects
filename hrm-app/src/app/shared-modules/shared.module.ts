import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [DragDropModule, FormsModule, HttpClientModule, MatNativeDateModule,],
  declarations: [],
})
export class SharedModule {}
