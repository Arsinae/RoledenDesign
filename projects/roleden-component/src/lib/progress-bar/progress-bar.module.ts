import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDProgressBarComponent],
  exports: [RDProgressBarComponent]
})
export class RDProgressBarModule { }
