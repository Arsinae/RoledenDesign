import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public data = [{name: 'Wiki', file: 'wiki'}, {name: 'Dune', file: 'duneWiki'}, {name: 'Sheana Brugh', file: 'sheanaFile'}];

  public htmlCode = '<rd-breadcrumb [color]="\'blue\'" [data]="data"></rd-breadcrumb>';
  public tsCode = 'public data = [\n  {name: \'Wiki\', file: \'wiki\'},\n' +
    '  {name: \'Dune\', file: \'duneWiki\'},\n  {name: \'Sheana Brugh\', file: \'sheanaFile\'}\n];\n\n' +
    'selectFile(file) {\n  console.log(\'Selected file.\', file);\n}\n';

  constructor() { }

  ngOnInit() {
  }

  selectFile(file) {
    console.log('Selected file.', file);
  }

}
