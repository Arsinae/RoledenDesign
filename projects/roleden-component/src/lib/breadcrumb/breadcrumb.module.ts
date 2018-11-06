import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreadcrumbComponent} from './breadcrumb.component';
import {BreadcrumbElementDirective} from './breadcrumb-element.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BreadcrumbComponent,
    BreadcrumbElementDirective
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbElementDirective
  ]
})
export class BreadcrumbModule { }
