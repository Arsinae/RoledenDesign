import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  public htmlCode = '<rd-input-number [(value)]="inputValue" [color]="\'purple\'" [label]="\'Increment\'" [min]="-20" [max]="20"' +
  '[increment]="2" [display]="\'both\'"></rd-input-number>';
  public tsCode = 'public inputValue = 1;\n';

  constructor() { }

  ngOnInit() {
  }

}
