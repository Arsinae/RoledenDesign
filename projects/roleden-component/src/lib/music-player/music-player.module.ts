import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player.component';
import { MusicElementDirective } from './music-element.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MusicPlayerComponent, MusicElementDirective],
  exports: [MusicPlayerComponent, MusicElementDirective]
})
export class MusicPlayerModule { }
