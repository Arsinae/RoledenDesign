import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselDataComponent } from './carousel-data/carousel-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    CarouselDataComponent
  ],
  exports: [
    CarouselComponent,
    CarouselDataComponent
  ]
})
export class CarouselModule { }
