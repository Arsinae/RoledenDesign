import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit {

  public value = 5;

  public htmlCode = '<rd-notation [color]="\'blue\'" [number]="10" [(value)]="value" [size]="25"></rd-notation>\n' +
    '<span>Note: {{value}}/10</span>';
  public tsCode = 'public value = 5';

  constructor() { }

  ngOnInit() {
  }

}
