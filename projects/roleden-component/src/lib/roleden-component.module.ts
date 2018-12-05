import { NgModule } from '@angular/core';
import { DiceComponent } from './dice/dice.component';
import {CommonModule} from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListModule} from './list/list.module';
import { ButtonComponent } from './button/button.component';
import {MusicPlayerModule} from './music-player/music-player.module';
import {BreadcrumbModule} from './breadcrumb/breadcrumb.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';

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
    FlippingCardComponent
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
    FlippingCardComponent
  ]
})
export class RoledenComponentModule { }
