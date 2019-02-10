import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  public htmlCode: string = '<rd-small-card [color]="\'orange\'" [icon]="\'fa-edit\'" [background]="\'split\'">\n' +
    ' <div role="title">My story - orange</div>\n' +
    ' <div role="type">Script</div>\n' +
    '</rd-small-card>\n';

  constructor() { }

  ngOnInit() {
  }

  onHighLight(ev) {
    console.log(ev);
  }

}
