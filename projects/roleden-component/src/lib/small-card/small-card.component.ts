import { DarkService } from './../dark.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rd-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class RDSmallCardComponent implements OnInit {


  @Input() color = 'gold';
  @Input() icon = 'fa-times';
  @Input() background = 'full';

  @Output() textClick: EventEmitter<any> = new EventEmitter();
  @Output() iconClick: EventEmitter<any> = new EventEmitter();

  private dark = false;

  constructor(private darkService: DarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

  colorClass() {
    return 'objectCard cardList ' + this.color + 'Card ' + this.background + 'Card' + (this.dark ? ' rdDark' : '');
  }

  iconClass() {
    return 'fas ' + this.icon;
  }

}
