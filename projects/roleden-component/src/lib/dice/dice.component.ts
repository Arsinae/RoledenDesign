import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'rd-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  @ViewChild('dice') dice;
  @ViewChild('wrapper') wrapper;

  constructor() {
  }

  ngOnInit() {
    this.wrapper.nativeElement.style.transform = 'scale(0.25)';
  }

  rollDice() {
    this.dice.nativeElement.classList.remove('roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6');
    const random = Math.floor(Math.random() * 10 % 6) + 1;
    const newOne = this.dice.nativeElement.cloneNode(true);
    this.dice.nativeElement.parentNode.replaceChild(newOne, this.dice.nativeElement);
    this.dice.nativeElement = newOne;
    this.dice.nativeElement.classList.add('roll' + random);
  }

}
