import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
