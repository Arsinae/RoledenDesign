import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-radio-button-option',
  templateUrl: './radio-button-option.component.html',
  styleUrls: ['./radio-button-option.component.scss']
})
export class RadioButtonOptionComponent implements OnInit {

  @Input() value = '';

  @Output() checkedChange: EventEmitter<any> = new EventEmitter();

  public checked = false;
  public color = 'gold';
  public display = 'line';

  constructor() { }

  ngOnInit() {
  }

  changeCheck() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
