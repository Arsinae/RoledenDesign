import { ExplanationModule } from './../explanation/explanation.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RoledenComponentModule } from 'projects/roleden-component/src/lib/roleden-component.module';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    RoledenComponentModule,
    ExplanationModule
  ],
  declarations: [
    FormComponent,
    ButtonComponent,
    TextEditorComponent,
    InputComponent,
    SelectComponent
  ],
  exports: [FormComponent]
})
export class FormModule { }
