import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExplanationComponent} from './explanation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExplanationComponent],
  exports: [ExplanationComponent]
})
export class ExplanationModule { }
