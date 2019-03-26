import { RDDiceComponent } from './dice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDDiceComponent],
  exports: [RDDiceComponent]
})
export class RDDiceModule { }
