import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { CheckBoxOptionComponent } from './check-box-option/check-box-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckBoxComponent,
    CheckBoxOptionComponent
  ],
  exports: [
    CheckBoxComponent,
    CheckBoxOptionComponent
  ]
})
export class CheckBoxModule { }
