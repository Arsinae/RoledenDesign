import { DiceComponent } from './dice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiceComponent
  ],
  exports: [
    DiceComponent
  ]
})
export class DiceModule { }
