import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { DiceModule } from './dice/dice.module';
import { SmallCardModule } from './small-card/small-card.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ListModule } from './list/list.module';
import { ButtonModule } from './button/button.module';
import { MusicPlayerModule } from './music-player/music-player.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { FlippingCardModule } from './flipping-card/flipping-card.module';
import { AccordionModule } from './accordion/accordion.module';
import { InputModule } from './input/input.module';
import { InputNumberModule } from './input-number/input-number.module';
import { NotationModule } from './notation/notation.module';
import { SelectModule } from './select/select.module';
import { CheckBoxModule } from './check-box/check-box.module';
import { RadioButtonModule } from './radio-button/radio-button.module';
import { AlertModule } from './alert/alert.module';
import { AlertService } from './alert/alert.service';
import { SnackBarService } from './snack-bar/snack-bar.service';
import { SnackBarModule } from './snack-bar/snack-bar.module';
import { CarouselModule } from './carousel/carousel.module';
import { TabsModule } from './tabs/tabs.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ModalModule } from './modal/modal.module';
import { ConfirmModalModule } from './confirm-modal/confirm-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextEditorComponent,
    TooltipComponent
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
    TextEditorComponent,
    TooltipComponent
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
