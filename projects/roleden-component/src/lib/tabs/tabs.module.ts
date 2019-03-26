import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDTabsComponent } from './tabs.component';
import { RDTabsGroupComponent } from './tabs-group/tabs-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDTabsComponent, RDTabsGroupComponent],
  exports: [RDTabsComponent, RDTabsGroupComponent]
})
export class RDTabsModule { }
