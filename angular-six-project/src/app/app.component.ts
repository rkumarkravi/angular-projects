import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DraggableDialogComponent, {
      width: '400px'
    });
  }
}
