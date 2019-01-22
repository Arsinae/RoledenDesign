import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public htmlCode = '<rd-input [(value)]="inputValue" [placeholder]="\'Basic Text Input\'" [color]="\'red\'"></rd-input>\n';
  public tsCode = 'public inputValue = \'test\';\n';

  constructor() { }

  ngOnInit() {
  }

}
