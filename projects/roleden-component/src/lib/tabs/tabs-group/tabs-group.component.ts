import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { trigger, transition, query, animate, keyframes, style, group } from '@angular/animations';
import { TabsComponent } from './../tabs.component';

@Component({
  selector: 'rd-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        group([query(':enter', animate('.5s linear', keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 1.0}),
          ])), {optional: true}),
        query(':leave', animate('.5s linear', keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, offset: 1.0}),
          ])), {optional: true})])
      ])
    ]),
    trigger('contentAnimation', [
      transition(':increment', [
        query(':enter', animate('.5s linear', keyframes([
            style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ])), {optional: true})
      ]),
      transition(':decrement', [
        query(':enter', animate('.5s linear', keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ])), {optional: true})
      ])
    ])
  ]
})
export class TabsGroupComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() displayedTitleNumber = 5;
  @Input() displayedIndex = 0;

  @Output() displayedIndexChange: EventEmitter<any> = new EventEmitter();

  @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent>;

  public titleIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setView();
  }

  ngOnChanges(changes) {
  }

  get titleList() {
    const titles = [];
    this.tabs.forEach((tab, index) => {
      if (index >= this.titleIndex && index < this.titleIndex + this.displayedTitleNumber) {
        titles.push(tab.title);
      }
    });
    return titles;
  }

  canChangeTitlesIndex(value) {
    return (this.titleIndex + value > 0 && this.titleIndex + value < this.tabs.length);
  }

  changeTitlesIndex(value) {
    this.titleIndex += value;
    if (this.titleIndex < 0) {
      this.titleIndex = 0;
    } else if (this.titleIndex + this.displayedTitleNumber > this.tabs.length) {
      this.titleIndex = this.tabs.length - this.displayedTitleNumber;
    }
  }

  changeDisplayedIndex(value) {
    if (value !== this.displayedIndex) {
      this.displayedIndex = value;
      this.displayedIndexChange.emit(value);
      this.setView();
    }
  }

  setView() {
    this.tabs.forEach((tab, index) => {
      if (index === this.displayedIndex) {
        tab.display = true;
      } else {
        tab.display = false;
      }
    });
  }

}
