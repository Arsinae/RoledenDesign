import { Component, OnInit, ContentChildren, Input, Output, EventEmitter, AfterViewInit, OnChanges, QueryList } from '@angular/core';
import { RadioButtonOptionComponent } from './radio-button-option/radio-button-option.component';

@Component({
  selector: 'rd-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit, AfterViewInit, OnChanges {

  @ContentChildren(RadioButtonOptionComponent) options: QueryList<RadioButtonOptionComponent>;

  @Input() color = 'gold';
  @Input() value = '';
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

  setColorOption(option: RadioButtonOptionComponent) {
    option.color = this.color;
  }

  setDisplay(option: RadioButtonOptionComponent) {
    option.display = this.display;
  }

  setChecked(option: RadioButtonOptionComponent) {
    if (this.value === option.value) {
      option.checked = true;
    }
  }

  subscribeToChecked(option: RadioButtonOptionComponent) {
    option.checkedChange.subscribe(check => {
      if (check) {
        this.value = option.value;
        this.options.forEach(otherOptions => {
          if (option !== otherOptions) {
            otherOptions.checked = false;
          }
        });
      } else if (!check) {
        this.value = '';
      }
      this.valueChange.emit(this.value);
    });
  }

}
