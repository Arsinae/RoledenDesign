import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDNotationComponent } from './notation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDNotationComponent],
  exports: [RDNotationComponent]
})
export class RDNotationModule { }
