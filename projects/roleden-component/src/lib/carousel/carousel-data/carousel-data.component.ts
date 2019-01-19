import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rd-carousel-data',
  templateUrl: './carousel-data.component.html',
  styleUrls: ['./carousel-data.component.scss']
})
export class CarouselDataComponent implements OnInit {

  public displayed = false;

  constructor() { }

  ngOnInit() {
  }

}
