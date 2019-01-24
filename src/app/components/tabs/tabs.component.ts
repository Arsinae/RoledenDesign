import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public tabs = ['Leto Atréides', 'Jessica Atréides', 'Paul Atréides', 'Alia Atréides', 'Leto II Atréides', 'Ghanima Atréides'];

  public htmlCode = '<rd-tabs-group [color]="\'purple\'" (displayedIndexChange)="changeIndex($event)">\n' +
    ' <rd-tabs *ngFor="let title of tabs" [title]="title" (changeDisplay)="changeDisplay($event)">\n   <div>{{title}}</div>\n' +
    ' </rd-tabs>\n</rd-tabs-group>\n';

  public tsCode = 'public tabs = [\n  \'Leto Atréides\',\n  \'Jessica Atréides\',\n' +
  '  \'Paul Atréides\',\n  \'Alia Atréides\',\n  \'Leto II Atréides\',\n  \'Ghanima Atréides\'\n];\n\n' +
  'changeIndex(ev) {\n  console.log(\'index change.\', ev);\n}\n' +
  'changeDisplay(event) {\n console.log(\'Change Display\', event);\n}\n';

  constructor() { }

  ngOnInit() {
  }

  changeIndex(ev) {
    console.log('Index change.', ev);
  }

  changeDisplay(event) {
    console.log('Change display', event);
  }

}
