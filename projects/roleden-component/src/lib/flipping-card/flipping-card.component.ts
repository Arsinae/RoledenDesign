import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent implements OnInit {

  @Input() rounded = false;
  @Input() bounce = false;
  @Input() height = 200;

  public isFlip = false;

  constructor() { }

  ngOnInit() {
  }

}
