import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() width = 50;
  @Input() height = 15;
  @Input() color = 'gold';
  @Input() display = false;

  constructor() { }

  ngOnInit() {
  }

}
