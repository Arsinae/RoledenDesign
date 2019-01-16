import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import { SnackBarService } from './snack-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SnackBarComponent
  ],
  providers: [
    SnackBarService
  ],
  exports: [
    SnackBarComponent
  ]
})
export class SnackBarModule { }
