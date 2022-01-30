import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
})
export class MaterialModule {}
