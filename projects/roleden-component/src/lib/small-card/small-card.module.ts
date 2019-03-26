import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDSmallCardComponent } from './small-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDSmallCardComponent],
  exports: [RDSmallCardComponent]
})
export class RDSmallCardModule { }
