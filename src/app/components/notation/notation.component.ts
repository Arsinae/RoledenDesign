import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit {

  value = 5;

  constructor() { }

  ngOnInit() {
  }

}
