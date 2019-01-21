import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { TabsComponent } from './../tabs.component';

@Component({
  selector: 'rd-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss']
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

  }

  ngOnChanges() {

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
    }
  }

}
