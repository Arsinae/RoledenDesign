import { RDCarouselDataComponent } from './carousel-data/carousel-data.component';
import { Component, OnInit, QueryList, ContentChildren, AfterViewInit, Input, OnChanges,
  Output, EventEmitter } from '@angular/core';
import { trigger, transition, query, animate, keyframes, style, group } from '@angular/animations';
import 'hammerjs';

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
export class RDCarouselComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() height = 250;
  @Input() timer = 3000;
  @Input() displayedIndex = 0;

  @Output() displayedIndexChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(RDCarouselDataComponent) carousels: QueryList<RDCarouselDataComponent>;

  public change = null;
  public timeout = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.carousels && changes.displayedIndex) {
      if (changes.displayedIndex.currentValue < changes.displayedIndex.previousValue) {
        this.change = 'next';
      } else if (changes.displayedIndex.currentValue > changes.displayedIndex.previousValue) {
        this.change = 'prev';
      }
      this.changeView();
    }
  }

  ngAfterViewInit() {
    this.changeView();
  }

  changeDisplayByClick(event, value, change) {
    event.stopPropagation();
    this.changeDisplay(value, change);
  }

  changeDisplay(value, change) {
    this.change = change;
    this.displayedIndex = (this.displayedIndex + value) < 0 ? this.carousels.length - 1
    : (this.displayedIndex + value) % this.carousels.length;
    this.displayedIndexChange.emit(this.displayedIndex);
    this.changeView();
  }

  changeStep(event, index) {
    if (index < this.displayedIndex) {
      this.change = 'next';
    } else if (index > this.displayedIndex) {
      this.change = 'prev';
    }
    this.displayedIndex = index;
    this.changeView();
  }

  changeView() {
    clearTimeout(this.timeout);
    this.carousels.forEach((carousel, index) => {
      if (carousel.displayed === true && index !== this.displayedIndex) {
        Promise.resolve(null).then(() => carousel.displayed = false);
        carousel.displayChange.emit({index: index, state: false});
      }
    });
    this.carousels.forEach((carousel, index) => {
      if (index === this.displayedIndex) {
        Promise.resolve(null).then(() => carousel.displayed = true);
        carousel.displayChange.emit({index: index, state: true});
      }
    });
    setTimeout(() => {
      this.change = null;
    }, 500);
    if (this.timer !== null) {
      this.timeout = setTimeout(() => {
        this.changeDisplay(1, 'next');
      }, this.timer);
    }
  }

  get carouselLength() {
    const length = [];
    for (let i = 0; i < this.carousels.length; i++) {
      length.push(i);
    }
    return length;
  }

}
