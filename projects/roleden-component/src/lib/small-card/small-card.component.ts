import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rd-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {


  @Input() color = 'gold';
  @Input() icon = 'fa-times';

  @Output() textClick: EventEmitter<any> = new EventEmitter();
  @Output() iconClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  colorClass() {
    return 'objectCard cardList ' + this.color;
  }

  iconClass() {
    return 'fas ' + this.icon;
  }

}
