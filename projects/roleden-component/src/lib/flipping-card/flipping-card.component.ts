import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent implements OnInit {

  @Input() rounded = false;
  @Input() bounce = false;
  @Input() height = 200;

  @Output() cardFlipped: EventEmitter<any> = new EventEmitter();

  public isFlip = false;

  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    this.isFlip = !this.isFlip;
    this.cardFlipped.emit(this.isFlip);
  }

}
