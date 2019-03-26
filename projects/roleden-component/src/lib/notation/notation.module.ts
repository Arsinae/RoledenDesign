import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationComponent } from './notation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotationComponent],
  exports: [NotationComponent]
})
export class NotationModule { }
