import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() position = 'bottom';
  @Input() color = 'black';
  @Input() style = 'dotted';

  constructor() { }

  ngOnInit() {
  }

  tooltipClassList() {
    return 'tooltipContainer ' + (this.position + 'Tooltip ') + (this.color + 'Tooltip ') + (this.style + 'Tooltip');
  }

}
