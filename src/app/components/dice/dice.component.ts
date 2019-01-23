import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  public value = 0;

  public htmlCode = '<rd-dice [diceSize]="100" (rollValue)="rollValue($event)"></rd-dice>\n' +
    '<span>You roll a {{value}} on 100</span>\n';
  public tsCode = 'public value = 0;\nrollValue(event){\n  this.value = event;\n}\n';

  constructor() { }

  ngOnInit() {
  }

  rollValue(event) {
    this.value = event;
  }

}
