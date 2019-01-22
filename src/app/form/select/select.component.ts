import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public character = '';

  public htmlCode = '<rd-select [(value)]="selected" [placeholder]="\'Kwisatz Haderach\'" [color]="\'orange\'">\n' +
    '  <rd-select-option *ngFor="let character of characters" [value]="\'character.value\'" [text]="\'character.text\'">\n' +
    '    <div>{{character.text}}</div>\n  </rd-select-option>\n' +
    '</rd-select>\n<span>Value selected: {{selected}}</span>\n';
  public tsCode = 'public characters = [\n  {text: \'Paul Atréides\', value: \'paul\'},\n' +
    '  {text: \'Duncan Idaho\', value: \'duncan\'},\n  {text: \'Leto II Atréides\', value: \'leto\'},\n' +
    ']\npublic selected = \'\';\n';

  constructor() { }

  ngOnInit() {
  }

}
