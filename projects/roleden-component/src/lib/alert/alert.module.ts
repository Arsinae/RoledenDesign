import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDAlertComponent } from './alert.component';
import { RDAlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDAlertComponent],
  providers: [RDAlertService],
  exports: [RDAlertComponent]
})
export class RDAlertModule {
}
