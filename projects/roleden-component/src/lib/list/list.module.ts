import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RDListComponent} from './list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RDListComponent],
  exports: [RDListComponent]
})
export class RDListModule { }
