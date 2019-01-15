import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { DiceComponent } from './dice/dice.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {ListModule} from './list/list.module';
import { ButtonComponent } from './button/button.component';
import {MusicPlayerModule} from './music-player/music-player.module';
import {BreadcrumbModule} from './breadcrumb/breadcrumb.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
import { AccordionModule } from './accordion/accordion.module';
import { InputComponent } from './input/input.component';
import { NotationComponent } from './notation/notation.component';
import { SelectModule } from './select/select.module';
import { CheckBoxModule } from './check-box/check-box.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DiceComponent,
    SmallCardComponent,
    TextEditorComponent,
    ButtonComponent,
    ProgressBarComponent,
    FlippingCardComponent,
    InputComponent,
    NotationComponent
  ],
  exports: [
    DiceComponent,
    SmallCardComponent,
    ListModule,
    MusicPlayerModule,
    TextEditorComponent,
    ButtonComponent,
    BreadcrumbModule,
    ProgressBarComponent,
    FlippingCardComponent,
    AccordionModule,
    InputComponent,
    NotationComponent,
    SelectModule,
    CheckBoxModule
  ]
})
export class RoledenComponentModule { }
