import { NgModule } from '@angular/core';
import { DiceComponent } from './dice/dice.component';
import {CommonModule} from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListModule} from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DiceComponent,
    SmallCardComponent,
    TextEditorComponent
  ],
  exports: [
    DiceComponent,
    SmallCardComponent,
    ListModule,
    TextEditorComponent
  ]
})
export class RoledenComponentModule { }
