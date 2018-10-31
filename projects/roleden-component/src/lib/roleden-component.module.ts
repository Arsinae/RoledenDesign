import { NgModule } from '@angular/core';
import { DiceComponent } from './dice/dice.component';
import {CommonModule} from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListModule} from './list/list.module';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbElementDirective } from './breadcrumb/breadcrumb-element.directive';

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
    BreadcrumbComponent,
    BreadcrumbElementDirective
  ],
  exports: [
    DiceComponent,
    SmallCardComponent,
    ListModule,
    TextEditorComponent,
    ButtonComponent,
    BreadcrumbComponent,
    BreadcrumbElementDirective
  ]
})
export class RoledenComponentModule { }
