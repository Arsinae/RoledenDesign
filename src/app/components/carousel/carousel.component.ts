import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public htmlCode = '<rd-carousel>\n' +
  '  <rd-carousel-data (displayChange)="changeDisplay($event)">\n    <img src="Arrakis.jpg">\n  </rd-carousel-data>\n' +
  '  <rd-carousel-data (displayChange)="changeDisplay($event)">\n    <img src="Caladan.jpg">\n' +
  '  </rd-carousel-data>\n</rd-carousel>\n';

  public tsCode = 'changeDisplay(event) {\n  console.log(\'Display change\', event);\n}\n';

  constructor() { }

  ngOnInit() {
  }

  changeDisplay(event) {
    console.log('Display Change', event);
  }

}
