import { ButtonModule } from './../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    ConfirmModalComponent
  ],
  exports: [
    ConfirmModalComponent
  ]
})
export class ConfirmModalModule { }
