import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { RDAccordionModule } from './accordion/accordion.module';
import { RDAlertModule } from './alert/alert.module';
import { RDAlertService } from './alert/alert.service';
import { RDBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { RDButtonModule } from './button/button.module';
import { RDCarouselModule } from './carousel/carousel.module';
import { RDCheckBoxModule } from './check-box/check-box.module';
import { RDConfirmModalModule } from './confirm-modal/confirm-modal.module';
import { RDDiceModule } from './dice/dice.module';
import { RDFlippingCardModule } from './flipping-card/flipping-card.module';
import { RDInputModule } from './input/input.module';
import { RDInputNumberModule } from './input-number/input-number.module';
import { ListModule } from './list/list.module';
import { ModalModule } from './modal/modal.module';
import { MusicPlayerModule } from './music-player/music-player.module';
import { NotationModule } from './notation/notation.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { RadioButtonModule } from './radio-button/radio-button.module';
import { SelectModule } from './select/select.module';
import { SmallCardModule } from './small-card/small-card.module';
import { SnackBarModule } from './snack-bar/snack-bar.module';
import { SnackBarService } from './snack-bar/snack-bar.service';
import { TabsModule } from './tabs/tabs.module';
import { TextEditorModule } from './text-editor/text-editor.module';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  ],
  exports: [
    RDAccordionModule,
    RDAlertModule,
    RDBreadcrumbModule,
    RDButtonModule,
    RDCarouselModule,
    RDCheckBoxModule,
    RDConfirmModalModule,
    RDDiceModule,
    RDFlippingCardModule,
    RDInputModule,
    RDInputNumberModule,
    ListModule,
    ModalModule,
    MusicPlayerModule,
    NotationModule,
    ProgressBarModule,
    RadioButtonModule,
    SelectModule,
    SmallCardModule,
    SnackBarModule,
    TabsModule,
    TextEditorModule,
    TooltipModule
  ]
})
export class RoledenComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RoledenComponentModule,
      providers: [
        RDAlertService,
        SnackBarService
      ]
    };
  }
}
