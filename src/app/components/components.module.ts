import { ExplanationModule } from './../explanation/explanation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

import { ComponentsComponent } from './components.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
import { DiceComponent } from './dice/dice.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RoledenComponentModule } from 'projects/roleden-component/src/lib/roleden-component.module';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { NotationComponent } from './notation/notation.component';
import { AlertComponent } from './alert/alert.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ModalComponent } from './modal/modal.component';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  imports: [
    CommonModule,
    ExplanationModule,
    RoledenComponentModule,
    HighlightModule.forRoot({languages: hljsLanguages})
  ],
  declarations: [
    ComponentsComponent,
    ListComponent,
    BreadcrumbComponent,
    DiceComponent,
    FlippingCardComponent,
    MusicPlayerComponent,
    ProgressBarComponent,
    SmallCardComponent,
    AccordeonComponent,
    NotationComponent,
    AlertComponent,
    SnackBarComponent,
    CarouselComponent,
    TabsComponent,
    TooltipComponent,
    ModalComponent
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
