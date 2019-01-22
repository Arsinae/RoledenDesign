import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent implements OnInit {

  public htmlCode = '<rd-flipping-card [rounded]="true" [bounce]="true">\n' +
    ' <div front>\n' +
    '   <img src="https://i.pinimg.com/originals/90/71/c4/9071c49a6950913ed32ada26f4c096e9.jpg">\n' +
    ' </div>\n' +
    ' <div back>\n' +
    '   <span>I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.' +
    'I will face my fear. I will let it pass over me and through me.</span>\n' +
    ' </div>\n' +
    '</rd-flipping-card>';

  constructor() { }

  ngOnInit() {
  }

}
