import { Component, OnInit } from '@angular/core';
import { transition, animate, trigger, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('false => true', [
        animate('.3s linear', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, offset: 1.0}),
        ]))
      ])
    ])
  ]
})
export class ExplanationComponent implements OnInit {

  expand = false;

  constructor() { }

  ngOnInit() {
  }

}
