import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CheckBoxOptionComponent } from './check-box-option/check-box-option.component';

@Component({
  selector: 'rd-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit, AfterViewInit, OnChanges {

  @ContentChildren(CheckBoxOptionComponent) options: QueryList<CheckBoxOptionComponent>;

  @Input() color = 'gold';
  @Input() value: Array<string> = [];
  @Input() display = 'line';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.options.forEach(option => {
      this.setColorOption(option);
      this.setDisplay(option);
      this.setChecked(option);
      this.subscribeToChecked(option);
    });
  }

  ngOnChanges(changes) {
    if (this.options) {
      this.options.forEach(option => {
        this.setColorOption(option);
        this.setDisplay(option);
        this.setChecked(option);
        this.subscribeToChecked(option);
      });
    }
  }

  setColorOption(option: CheckBoxOptionComponent) {
    option.color = this.color;
  }

  setDisplay(option: CheckBoxOptionComponent) {
    option.display = this.display;
  }

  setChecked(option: CheckBoxOptionComponent) {
    if (this.value.indexOf(option.value) !== -1) {
      option.checked = true;
    }
  }

  subscribeToChecked(option: CheckBoxOptionComponent) {
    option.checkedChange.subscribe(check => {
      if (check) {
        this.value.push(option.value);
      } else if (!check && this.value.indexOf(option.value) !== -1) {
        this.value.splice(this.value.indexOf(option.value), 1);
      }
      this.valueChange.emit(this.value);
    });
  }

}
