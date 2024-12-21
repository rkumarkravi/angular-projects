import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-draggable-dialog',
  templateUrl: './draggable-dialog.component.html',
  styleUrls: ['./draggable-dialog.component.css']
})
export class DraggableDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DraggableDialogComponent>) { }
  ngOnInit(): void {
  }
}
