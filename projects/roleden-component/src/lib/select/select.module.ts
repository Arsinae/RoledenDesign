import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SelectOptionComponent } from './select-option/select-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectComponent,
    SelectOptionComponent
  ],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule { }
