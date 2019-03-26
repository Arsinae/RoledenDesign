import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RDBreadcrumbComponent} from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RDBreadcrumbComponent],
  exports: [RDBreadcrumbComponent]
})
export class RDBreadcrumbModule { }
