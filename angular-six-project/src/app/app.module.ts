import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DraggableDialogComponent
  ],
  imports: [
    DragDropModule,
    MatDialogModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
