import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public htmlCode = '<rd-carousel [(displayedIndex)]="index">\n' +
  '  <rd-carousel-data (displayChange)="changeDisplay($event)">\n    <img src="Arrakis.jpg">\n  </rd-carousel-data>\n' +
  '  <rd-carousel-data (displayChange)="changeDisplay($event)">\n    <img src="Caladan.jpg">\n' +
  '  </rd-carousel-data>\n</rd-carousel>\n';

  public tsCode = 'public index = 0;\n\nchangeDisplay(event) {\n  console.log(\'Display change\', event);\n}\n';

  public index = 0;

  constructor() { }

  ngOnInit() {
  }

  changeDisplay(event) {
  }

  log(letter) {
  }

}
