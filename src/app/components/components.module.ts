import { ExplanationModule } from './../explanation/explanation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { ListModule } from './list/list.module';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
import { DiceComponent } from './dice/dice.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RoledenComponentModule } from 'projects/roleden-component/src/lib/roleden-component.module';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { NotationComponent } from './notation/notation.component';

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    ExplanationModule,
    RoledenComponentModule
  ],
  declarations: [
    ComponentsComponent,
    BreadcrumbComponent,
    DiceComponent,
    FlippingCardComponent,
    MusicPlayerComponent,
    ProgressBarComponent,
    SmallCardComponent,
    AccordeonComponent,
    NotationComponent
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
