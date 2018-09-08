import { NgModule } from '@angular/core';
import { DiceComponent } from './dice/dice.component';
import {CommonModule} from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';

@NgModule({
  imports: [CommonModule
  ],
  declarations: [DiceComponent, SmallCardComponent],
  exports: [DiceComponent, SmallCardComponent]
})
export class RoledenComponentModule { }
