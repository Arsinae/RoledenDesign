import { DarkService } from './../dark.service';
import { Component, OnInit, Input, EventEmitter, OnChanges, Output } from '@angular/core';
import { trigger, transition, animate, keyframes, style} from '@angular/animations';

@Component({
  selector: 'rd-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  animations: [
    trigger('turnAnimation', [
      transition('false => true', animate('2.5s linear', keyframes([
        style({transform: 'translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)', offset: 0}),
        style({transform: 'translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg) scale(0.8)', offset: 0.16}),
        style({transform: 'translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg) scale(0.8)', offset: 0.33}),
        style({transform: 'translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg) scale(0.8)', offset: 0.5}),
        style({transform: 'translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg) scale(0.8)', offset: 0.66}),
        style({transform: 'translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(180deg) scale(0.8)', offset: 0.83}),
        ])),
      )
    ])
  ]
})
export class RDDiceComponent implements OnInit, OnChanges {

  @Input() diceSize = 6;

  @Output() rollValue: EventEmitter<any> = new EventEmitter();

  public chosenValue = 1;
  public rolling = false;
  public dark = false;

  constructor(private darkService: DarkService) {
  }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  ngOnChanges(changes) {
    this.diceSize = Math.max(Math.min(this.diceSize, 100), 6);
  }

  rollDice() {
    this.rolling = true;
  }

  resetChosenValue() {
    if (this.rolling === true) {
      this.chosenValue = Math.floor(Math.random() * 100 % this.diceSize) + 1;
      this.rollValue.emit(this.chosenValue);
      this.rolling = false;
    }
  }

}
