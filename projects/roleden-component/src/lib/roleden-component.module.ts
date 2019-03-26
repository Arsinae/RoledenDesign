import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AccordionModule } from './accordion/accordion.module';
import { AlertModule } from './alert/alert.module';
import { AlertService } from './alert/alert.service';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ButtonModule } from './button/button.module';
import { CarouselModule } from './carousel/carousel.module';
import { CheckBoxModule } from './check-box/check-box.module';
import { ConfirmModalModule } from './confirm-modal/confirm-modal.module';
import { DiceModule } from './dice/dice.module';
import { FlippingCardModule } from './flipping-card/flipping-card.module';
import { InputModule } from './input/input.module';
import { InputNumberModule } from './input-number/input-number.module';
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
    AccordionModule,
    AlertModule,
    BreadcrumbModule,
    ButtonModule,
    CarouselModule,
    CheckBoxModule,
    ConfirmModalModule,
    DiceModule,
    FlippingCardModule,
    InputModule,
    InputNumberModule,
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
        AlertService,
        SnackBarService
      ]
    };
  }
}
