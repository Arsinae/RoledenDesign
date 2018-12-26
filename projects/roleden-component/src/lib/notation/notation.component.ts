import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'rd-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit {

  @Input() number = 5;
  @Input() value = 0;
  @Input() color = 'gold';
  @Input() size = 20;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('stars') stars;

  private savedValue = -1;

  constructor() { }

  ngOnInit() {
  }

  get starValue() {
    const star = [];
    let iterator = 0;
    for (; iterator < this.value; iterator++) {
      star.push('fas fa-star');
    }
    for (; iterator < this.number; iterator++) {
      star.push('far fa-star');
    }
    return star;
  }

  getNote(index) {
    this.savedValue = index + 1;
    this.value = index + 1;
    this.valueChange.emit(this.value);
  }

  hoverNote(index) {
    if (this.savedValue === -1) {
      this.savedValue = this.value;
    }
    this.value = index + 1;
  }

  resetNote() {
    if (this.savedValue !== -1) {
      this.value = this.savedValue;
      this.savedValue = -1;
    }
  }

}
