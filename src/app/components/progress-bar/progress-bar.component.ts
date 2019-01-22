import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public htmlCode = '<rd-progress-bar [width]="75" [height]="20" [color]="\'green\'"></rd-progress-bar>';

  constructor() { }

  ngOnInit() {
  }

}
