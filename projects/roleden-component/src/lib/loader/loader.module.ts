import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDLoaderComponent } from './loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDLoaderComponent],
  exports: [RDLoaderComponent]
})
export class RDLoaderModule { }
