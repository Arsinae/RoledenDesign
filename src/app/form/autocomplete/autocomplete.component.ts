import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  public character = '';
  public values = ['Paul', 'Leto II', 'Duncan'];

  public htmlCode = '<rd-input-autocomplete [(value)]="character" [placeholder]="\'Kwisatz Haderach\'"' +
    ' [color]="\'orange\'" [completeValues]="characters">\n</rd-input-autocomplete>\n' +
    '<span>Value selected: {{character}}</span>';
  public tsCode = 'public characters = [\'Paul Atréides\', \'Duncan Idaho\', \'Leto II Atréides\']\n' +
    'public character = \'\';\n';

  constructor() { }

  ngOnInit() {
  }

}
