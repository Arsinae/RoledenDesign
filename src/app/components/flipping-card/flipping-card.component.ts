import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent implements OnInit {

  public htmlCode = '<rd-flipping-card [rounded]="true" [bounce]="true" (cardFlipped)="cardFlip($event)">\n' +
    ' <div front>\n' +
    '   <img src="https://i.pinimg.com/originals/90/71/c4/9071c49a6950913ed32ada26f4c096e9.jpg">\n' +
    ' </div>\n' +
    ' <div back>\n' +
    '   <span>I must not fear. Fear is the mind-killer... </span>\n' +
    ' </div>\n' +
    '</rd-flipping-card>';
  public tsCode = 'cardFlip($event) {\n  console.log(\'Card Flipped\');\n}\n';

  constructor() { }

  ngOnInit() {
  }

  cardFlip($event) {
    console.log('Card Flipped');
  }

}
