import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public htmlCode: string = '<rd-card>\n' +
    '  <div class="card">\n    <div class="img">\n' +
    '      <img src="https://i.pinimg.com/originals/9c/65/07/9c65071899c8c179adda73ca7ab237b6.jpg">\n' +
    '    </div>\n    <div class="name">\n      Caladan\n    </div>\n  </div>\n' +
    '</rd-card>\n';

  constructor() { }

  ngOnInit() {
  }

}
