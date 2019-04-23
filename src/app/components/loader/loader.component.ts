import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public htmlCode = '<rd-loader [size]="50" [borderPercentage]="50" [animation]="\'hilltop\'"></rd-loader>\n';

  constructor() { }

  ngOnInit() {
  }

}
