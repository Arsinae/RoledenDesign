import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public htmlCode = '<rd-carousel>\n' +
  '  <rd-carousel-data>\n    <img src="https://stmed.net/sites/default/files/dune-wallpapers-29516-4438731.jpg">\n  </rd-carousel-data>\n' +
  '  <rd-carousel-data>\n    <img src="https://i.pinimg.com/originals/9c/65/07/9c65071899c8c179adda73ca7ab237b6.jpg">\n' +
  '  </rd-carousel-data>\n</rd-carousel>\n';

  constructor() { }

  ngOnInit() {
  }

}
