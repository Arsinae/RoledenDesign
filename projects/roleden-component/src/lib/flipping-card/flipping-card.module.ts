import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDFlippingCardComponent } from './flipping-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDFlippingCardComponent],
  exports: [RDFlippingCardComponent]
})
export class RDFlippingCardModule { }
