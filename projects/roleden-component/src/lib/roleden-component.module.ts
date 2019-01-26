import { NgModule, ModuleWithProviders } from '@angular/core';
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
    NotationComponent,
    InputNumberComponent,
    TooltipComponent
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
    InputNumberComponent,
    NotationComponent,
    SelectModule,
    CheckBoxModule,
    RadioButtonModule,
    AlertModule,
    SnackBarModule,
    CarouselModule,
    TabsModule,
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
