import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public loader: boolean = false;
  constructor(private _snackBar: MatSnackBar) {}
  startLoader() {
    this.loader = true;
  }
  stopLoader() {
    this.loader = false;
  }
  showSnackBarWithMessageAndAction(
    message: string,
    action: string,
    duration: number = 5,
    horiz: MatSnackBarHorizontalPosition = 'right',
    verti: MatSnackBarVerticalPosition = 'bottom'
  ) {
    this._snackBar.open(message, action, {
      horizontalPosition: horiz,
      verticalPosition: verti,
      duration: duration * 1000,
    });
  }
}
