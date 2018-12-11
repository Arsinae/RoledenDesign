import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Output() stateChange = new EventEmitter<any>();

  state = false;

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.state = !this.state;
    this.stateChange.emit(this.state);
  }

}
