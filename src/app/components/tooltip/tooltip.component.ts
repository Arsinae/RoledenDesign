import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  public htmlCode = '<rd-tooltip [color]="\'blue-light\'" [position]="\'top\'" [width]="250">\n' +
    '  <span text>Bonjour</span>\n  <span explanation>Bonsoir à vous tous</span>\n' +
    '</rd-tooltip>\n';

  constructor() { }

  ngOnInit() {
  }

}
