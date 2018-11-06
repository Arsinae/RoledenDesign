import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicPlayerComponent],
  exports: [MusicPlayerComponent]
})
export class MusicPlayerModule { }
