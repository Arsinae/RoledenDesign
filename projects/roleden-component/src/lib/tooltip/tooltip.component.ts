import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() position = 'left';

  constructor() { }

  ngOnInit() {
  }

}
