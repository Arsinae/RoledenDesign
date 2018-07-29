import { NgModule } from '@angular/core';
import { DiceComponent } from './dice/dice.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule
  ],
  declarations: [DiceComponent],
  exports: [DiceComponent]
})
export class RoledenComponentModule { }
