import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  public value = '';

  public htmlCode = '<rd-radio-button [(value)]="value" [color]="\'red\'">\n' +
    '  <rd-radio-button-option *ngFor="let order of orders" [value]="value">{{value}}</rd-radio-button-option>\n' +
    '</rd-radio-button>\n<span>Value: {{value}}</span>';
  public tsCode = 'public value = \'\';\npublic orders = [\'Bene Gesserit\', \'Bene Tleilax\', \'Honored Matres\'];\n';

  constructor() { }

  ngOnInit() {
  }

}
