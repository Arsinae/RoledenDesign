import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public htmlCode = '<rd-loader [number]="10" [(value)]="value" [size]="25" [color]="\'blue\'"></rd-loader>\n';

  constructor() { }

  ngOnInit() {
  }

}
