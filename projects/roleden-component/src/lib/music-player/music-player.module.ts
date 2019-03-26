import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDMusicPlayerComponent } from './music-player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RDMusicPlayerComponent],
  exports: [RDMusicPlayerComponent]
})
export class RDMusicPlayerModule { }
