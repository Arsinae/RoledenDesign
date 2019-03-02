import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  public htmlCode = '<span>Stilgar explains why the choice of "\n' +
    '  <rd-tooltip [color]="\'blue-light\'" [position]="\'top\'" [width]="250">\n' +
    '    <span text>Muad\'Dib</span>\n' +
    '    <span explanation>Muad\'Dib is wise in the ways of the desert.</span>\n' +
    '  </rd-tooltip>\n' +
    '" pleases the Fremen</span>\n';

  constructor() { }

  ngOnInit() {
  }

}
