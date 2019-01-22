import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  public value = [];
  public color = 'red';

  public htmlCode = '<rd-check-box [(value)]="value" [color]="\'red\'">\n' +
    '  <rd-check-box-option *ngFor="let order of orders" [value]="value">{{value}}</rd-check-box-option>\n' +
    '</rd-check-box>\n<span>Value: {{value.toString()}}</span>';
  public tsCode = 'public value = [];\npublic orders = [\'Bene Gesserit\', \'Bene Tleilax\', \'Honored Matres\'];\n';

  constructor() { }

  ngOnInit() {
  }

}
