import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list.component';
import {ListElementDirective} from './list-element.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent, ListElementDirective],
  exports: [ListComponent, ListElementDirective]
})
export class ListModule { }
