import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputNumberComponent } from './input-number.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    InputNumberComponent
  ],
  exports: [
    InputNumberComponent
  ]
})
export class InputNumberModule { }
