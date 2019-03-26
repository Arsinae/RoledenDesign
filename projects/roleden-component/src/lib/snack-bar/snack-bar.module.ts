import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDSnackBarComponent } from './snack-bar.component';
import { RDSnackBarService } from './snack-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDSnackBarComponent],
  providers: [RDSnackBarService],
  exports: [RDSnackBarComponent]
})
export class RDSnackBarModule { }
