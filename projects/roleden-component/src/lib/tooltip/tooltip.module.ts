import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDTooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDTooltipComponent],
  exports: [RDTooltipComponent]
})
export class RDTooltipModule { }
