import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { RDCheckBoxOptionComponent } from './check-box-option/check-box-option.component';

@Component({
  selector: 'rd-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class RDCheckBoxComponent implements OnInit, AfterViewInit, OnChanges {

  @ContentChildren(RDCheckBoxOptionComponent) options: QueryList<RDCheckBoxOptionComponent>;

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

  setColorOption(option: RDCheckBoxOptionComponent) {
    Promise.resolve(null).then(() => option.color = this.color);
  }

  setDisplay(option: RDCheckBoxOptionComponent) {
    Promise.resolve(null).then(() => option.display = this.display);
  }

  setChecked(option: RDCheckBoxOptionComponent) {
    if (this.value.indexOf(option.value) !== -1) {
      Promise.resolve(null).then(() => option.checked = true);
    }
  }

  subscribeToChecked(option: RDCheckBoxOptionComponent) {
    if (option.checkedChange.observers.length === 0) {
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

}
