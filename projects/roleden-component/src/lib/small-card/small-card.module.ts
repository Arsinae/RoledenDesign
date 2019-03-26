import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SmallCardComponent],
  exports: [SmallCardComponent]
})
export class SmallCardModule { }
