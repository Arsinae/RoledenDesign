import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoledenComponentModule } from 'projects/roleden-component/src/lib/roleden-component.module';

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';


import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ExplanationModule } from './../explanation/explanation.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ButtonComponent } from './button/button.component';


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
    RoledenComponentModule,
    ExplanationModule,
    HighlightModule.forRoot({languages: hljsLanguages})
  ],
  declarations: [
    FormComponent,
    ButtonComponent,
    TextEditorComponent,
    InputComponent,
    SelectComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    InputNumberComponent
  ],
  exports: [FormComponent]
})
export class FormModule { }
