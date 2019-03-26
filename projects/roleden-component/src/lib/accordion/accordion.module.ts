import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RDAccordionComponent } from './accordion.component';
import { RDPanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDAccordionComponent, RDPanelComponent],
  exports: [RDAccordionComponent, RDPanelComponent]
})
export class RDAccordionModule { }
