import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDRadioButtonComponent } from './radio-button.component';
import { RDRadioButtonOptionComponent } from './radio-button-option/radio-button-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDRadioButtonComponent, RDRadioButtonOptionComponent],
  exports: [RDRadioButtonComponent, RDRadioButtonOptionComponent]
})
export class RDRadioButtonModule { }
