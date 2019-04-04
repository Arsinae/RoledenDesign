import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RDInputAutocompleteComponent } from './input-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RDInputAutocompleteComponent],
  exports: [RDInputAutocompleteComponent]
})
export class RDInputAutocompleteModule { }
