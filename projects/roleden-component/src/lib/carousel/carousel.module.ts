import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RDCarouselComponent } from './carousel.component';
import { RDCarouselDataComponent } from './carousel-data/carousel-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RDCarouselComponent, RDCarouselDataComponent],
  exports: [RDCarouselComponent, RDCarouselDataComponent]
})
export class RDCarouselModule { }
