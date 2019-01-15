import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { RadioButtonOptionComponent } from './radio-button-option/radio-button-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RadioButtonComponent,
    RadioButtonOptionComponent
  ],
  exports: [
    RadioButtonComponent,
    RadioButtonOptionComponent
  ]
})
export class RadioButtonModule { }
