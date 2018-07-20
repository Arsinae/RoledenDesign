import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolling-dice',
  templateUrl: './rolling-dice.component.html',
  styleUrls: ['./rolling-dice.component.scss']
})
export class RollingDiceComponent implements OnInit {

  private dice;

  constructor() { }

  ngOnInit() {
    this.dice = document.getElementById('dice');
    document.getElementById('wrapper').style.transform = 'scale(0.25)';
  }

  rollDice() {
    this.dice.classList.remove('roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6');
    const random = Math.floor(Math.random() * 10 % 6) + 1;
    void this.dice.offsetWidth;
    this.dice.classList.add('roll' + random);
  }

}
