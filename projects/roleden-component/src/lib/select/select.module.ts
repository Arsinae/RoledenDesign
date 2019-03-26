import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDSelectComponent } from './select.component';
import { RDSelectOptionComponent } from './select-option/select-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDSelectComponent, RDSelectOptionComponent],
  exports: [RDSelectComponent, RDSelectOptionComponent]
})
export class RDSelectModule { }
