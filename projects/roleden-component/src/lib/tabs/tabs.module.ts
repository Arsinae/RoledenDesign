import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsGroupComponent } from './tabs-group/tabs-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsComponent,
    TabsGroupComponent
  ],
  exports: [
    TabsComponent,
    TabsGroupComponent
  ]
})
export class TabsModule { }
