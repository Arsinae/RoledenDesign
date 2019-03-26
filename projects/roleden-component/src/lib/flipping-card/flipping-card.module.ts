import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlippingCardComponent } from './flipping-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlippingCardComponent
  ],
  exports: [
    FlippingCardComponent
  ]
})
export class FlippingCardModule { }
