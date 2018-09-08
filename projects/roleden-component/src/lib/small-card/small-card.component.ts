import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rd-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {


  @Input() color = 'gold';
  @Input() icon = 'fa-times';

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
