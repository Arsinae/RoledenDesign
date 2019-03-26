import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDCheckBoxComponent } from './check-box.component';
import { RDCheckBoxOptionComponent } from './check-box-option/check-box-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDCheckBoxComponent, RDCheckBoxOptionComponent],
  exports: [RDCheckBoxComponent, RDCheckBoxOptionComponent]
})
export class RDCheckBoxModule { }
