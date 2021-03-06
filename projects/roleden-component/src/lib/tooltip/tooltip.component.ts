import { Component, OnInit, Input } from '@angular/core';
import { RDDarkService } from '../dark.service';

@Component({
  selector: 'rd-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class RDTooltipComponent implements OnInit {

  @Input() position = 'bottom';
  @Input() color = 'black';
  @Input() style = 'dotted';
  @Input() width: number = null;

  public dark = false;

  constructor(private darkService: RDDarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  tooltipClassList() {
    return 'tooltipContainer ' + (this.position + 'Tooltip ') + (this.color + 'Tooltip ') + (this.style + 'Tooltip')
      + (this.dark ? ' rdDark' : '');
  }

}
