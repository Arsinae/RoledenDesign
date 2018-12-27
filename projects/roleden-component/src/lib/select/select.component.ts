import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() value = '';

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  public open = false;

  constructor() { }

  ngOnInit() {
  }

}
