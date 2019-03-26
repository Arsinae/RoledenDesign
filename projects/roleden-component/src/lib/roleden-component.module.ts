import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { DiceModule } from './dice/dice.module';
import { SmallCardComponent } from './small-card/small-card.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ListModule } from './list/list.module';
import { ButtonModule } from './button/button.module';
import { MusicPlayerModule } from './music-player/music-player.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FlippingCardModule } from './flipping-card/flipping-card.module';
import { AccordionModule } from './accordion/accordion.module';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { NotationComponent } from './notation/notation.component';
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
import { ModalComponent } from './modal/modal.component';
import { ConfirmModalModule } from './confirm-modal/confirm-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SmallCardComponent,
    TextEditorComponent,
    ProgressBarComponent,
    InputComponent,
    NotationComponent,
    InputNumberComponent,
    TooltipComponent,
    ModalComponent,
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
    InputComponent,
    InputNumberComponent,
    ListModule,
    ModalComponent,
    MusicPlayerModule,
    NotationComponent,
    ProgressBarComponent,
    RadioButtonModule,
    SelectModule,
    SmallCardComponent,
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
