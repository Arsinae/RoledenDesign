import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDCardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDCardComponent],
  exports: [RDCardComponent]
})
export class RDCardModule { }
