import { NgModule, ModuleWithProviders } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { RDAccordionModule } from './accordion/accordion.module';
import { RDAlertModule } from './alert/alert.module';
import { RDAlertService } from './alert/alert.service';
import { RDBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { RDButtonModule } from './button/button.module';
import { RDCardModule } from './card/card.module';
import { RDCarouselModule } from './carousel/carousel.module';
import { RDCheckBoxModule } from './check-box/check-box.module';
import { RDConfirmModalModule } from './confirm-modal/confirm-modal.module';
import { RDDiceModule } from './dice/dice.module';
import { RDFlippingCardModule } from './flipping-card/flipping-card.module';
import { RDInputModule } from './input/input.module';
import { RDInputAutocompleteModule } from './input-autocomplete/input-autocomplete.module'
import { RDInputFileModule } from './input-file/input-file.module';
import { RDInputNumberModule } from './input-number/input-number.module';
import { RDListModule } from './list/list.module';
import { RDLoaderModule } from './loader/loader.module';
import { RDModalModule } from './modal/modal.module';
import { RDMusicPlayerModule } from './music-player/music-player.module';
import { RDNotationModule } from './notation/notation.module';
import { RDProgressBarModule } from './progress-bar/progress-bar.module';
import { RDRadioButtonModule } from './radio-button/radio-button.module';
import { RDSelectModule } from './select/select.module';
import { RDSmallCardModule } from './small-card/small-card.module';
import { RDSnackBarModule } from './snack-bar/snack-bar.module';
import { RDSnackBarService } from './snack-bar/snack-bar.service';
import { RDTabsModule } from './tabs/tabs.module';
import { RDTextEditorModule } from './text-editor/text-editor.module';
import { RDTooltipModule } from './tooltip/tooltip.module';

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
    RDCardModule,
    RDCarouselModule,
    RDCheckBoxModule,
    RDConfirmModalModule,
    RDDiceModule,
    RDFlippingCardModule,
    RDInputModule,
    RDInputAutocompleteModule,
    RDInputFileModule,
    RDInputNumberModule,
    RDListModule,
    RDLoaderModule,
    RDModalModule,
    RDMusicPlayerModule,
    RDNotationModule,
    RDProgressBarModule,
    RDRadioButtonModule,
    RDSelectModule,
    RDSmallCardModule,
    RDSnackBarModule,
    RDTabsModule,
    RDTextEditorModule,
    RDTooltipModule
  ]
})
export class RoledenComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RoledenComponentModule,
      providers: [
        RDAlertService,
        RDSnackBarService
      ]
    };
  }
}
