import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RDInputNumberComponent } from './input-number.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [RDInputNumberComponent],
  exports: [RDInputNumberComponent]
})
export class RDInputNumberModule { }
