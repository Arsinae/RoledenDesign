import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color = 'gold';

  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
