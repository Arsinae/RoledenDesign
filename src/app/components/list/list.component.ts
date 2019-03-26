import { Component, OnInit } from '@angular/core';
import { RDListElement } from 'projects/roleden-component/src/lib/list/list-element.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public data = [{color: 'blue', title: 'Super Character', file: '', icon: 'fas fa-male', author: 'me'},
{color: 'red', title: 'Awesome Adventure', file: '', icon: 'fas fa-file', author: 'me'}, new RDListElement()];

  public htmlCode = '<rd-list [data]="data" [search]="true" [sort]="true" (fileSelect)="selectFile($event)"' +
  ' [listAnimation]="true"></rd-list>\n';
  public tsCode = 'public data: Array<RDListElement> = [\n' +
    ' {color: \'blue\', title: \'Super Character\', file: \'\', icon: \'fas fa-male\', author: \'me\'},\n' +
    ' {color: \'red\', title: \'Awesome Adventure\', file: \'\', icon: \'fas fa-file\', author: \'me\'},\n' +
    ' new RDListElement()];\n\n' +
    'selectFile(file){\n' +
    ' console.log(\'File selected: \', file);\n' +
    '}\n';

  constructor() { }

  ngOnInit() {
  }

  selectFile(file) {
    console.log('File selected:', file);
  }
}
