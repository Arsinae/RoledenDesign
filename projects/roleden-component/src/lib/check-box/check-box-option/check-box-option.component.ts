import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-check-box-option',
  templateUrl: './check-box-option.component.html',
  styleUrls: ['./check-box-option.component.scss']
})
export class CheckBoxOptionComponent implements OnInit {

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
