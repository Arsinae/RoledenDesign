import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss']
})
export class AccordeonComponent implements OnInit {

  public htmlCode = '<rd-accordion>\n <rd-panel [color]="\'red\'">\n' +
    '   <div class="panelTitle" title>House Atréides</div>\n    <span>One of the Great Houses of ...</span>\n' +
    ' </rd-panel>\n <rd-panel (stateChange)="openHarkonnen($event)">\n' +
    '   <div class="panelTitle" title>House Harkonnen</div>\n   <span>The Harkonnens are featured ...</span>\n' +
    ' </rd-panel>\n</rd-accordion>\n';

    public tsCode = 'openHarkonnen(ev) {\n  console.log(\'Harkonnen Panel opened.\', ev);\n}\n';

  constructor() { }

  ngOnInit() {
  }

  openHarkonnen(ev) {
    console.log('Harkonnen Panel opened.', ev);
  }

}
