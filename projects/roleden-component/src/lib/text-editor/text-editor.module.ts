import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RDTextEditorComponent } from './text-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RDTextEditorComponent],
  exports: [RDTextEditorComponent]
})
export class RDTextEditorModule { }
