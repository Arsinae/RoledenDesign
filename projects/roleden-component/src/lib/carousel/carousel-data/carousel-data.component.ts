import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-carousel-data',
  templateUrl: './carousel-data.component.html',
  styleUrls: ['./carousel-data.component.scss']
})
export class RDCarouselDataComponent implements OnInit {

  @Output() displayChange: EventEmitter<any> = new EventEmitter();

  public displayed = false;

  constructor() { }

  ngOnInit() {
  }

}
