import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ RDModalComponent ],
  exports: [ RDModalComponent ]
})
export class RDModalModule { }
