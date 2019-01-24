import { CarouselDataComponent } from './carousel-data/carousel-data.component';
import { Component, OnInit, QueryList, ContentChildren, AfterViewInit, Input } from '@angular/core';
import { trigger, transition, query, animate, keyframes, style, group } from '@angular/animations';

@Component({
  selector: 'rd-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('* => prev', [
        group([query(':enter', animate('.5s linear', keyframes([
            style({transform: 'translateX(100%)', offset: 0}),
            style({transform: 'translateX(0)', offset: 1.0}),
          ])), {optional: true}),
        query(':leave', animate('.5s linear', keyframes([
            style({ offset: 0}),
            style({transform: 'translateX(-100%)', offset: 1.0}),
          ])), {optional: true})])
      ]),
      transition('* => next', [
        group([query(':enter', animate('.5s linear', keyframes([
            style({transform: 'translateX(-100%)', offset: 0}),
            style({transform: 'translateX(0)', offset: 1.0}),
          ])), {optional: true}),
        query(':leave', animate('.5s linear', keyframes([
            style({offset: 0}),
            style({transform: 'translateX(100%)', offset: 1.0}),
          ])), {optional: true})])
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() height = 250;

  @ContentChildren(CarouselDataComponent) carousels: QueryList<CarouselDataComponent>;

  public displayedIndex = 0;
  public change = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeView();
  }

  changeDisplay(value, change) {
    this.change = change;
    this.displayedIndex = (this.displayedIndex + value) < 0 ? this.carousels.length - 1
    : (this.displayedIndex + value) % this.carousels.length;
    this.changeView();
  }

  changeStep(index) {
    if (index < this.displayedIndex) {
      this.change = 'next';
    } else if (index > this.displayedIndex) {
      this.change = 'prev';
    }
    this.displayedIndex = index;
    this.changeView();
  }

  changeView() {
    this.carousels.forEach((carousel) => {
      Promise.resolve(null).then(() => carousel.displayed = false);
    });
    this.carousels.forEach((carousel, index) => {
      if (index === this.displayedIndex) {
        Promise.resolve(null).then(() => carousel.displayed = true);
      }
    });
    setTimeout(() => {
      this.change = null;
    }, 500);
  }

  get carouselLength() {
    const length = [];
    for (let i = 0; i < this.carousels.length; i++) {
      length.push(i);
    }
    return length;
  }

}
