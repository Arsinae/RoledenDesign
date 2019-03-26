import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDConfirmModalComponent } from './confirm-modal.component';
import { RDButtonModule } from './../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    RDButtonModule
  ],
  declarations: [RDConfirmModalComponent],
  exports: [RDConfirmModalComponent]
})
export class RDConfirmModalModule { }
