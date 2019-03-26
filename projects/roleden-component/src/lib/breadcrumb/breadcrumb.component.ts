import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RDBreadcrumbElement} from './breadcrumb-element.class';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class RDBreadcrumbComponent implements OnInit {

  @Input() data: Array<RDBreadcrumbElement> = [];
  @Input() color = 'gold';

  @Output() fileSelect: EventEmitter<any> = new EventEmitter();

  public dark = false;

  constructor(private darkService: DarkService) { }

  ngOnInit() {
    this.darkService.getDarkElement().subscribe(() => {
      this.dark = this.darkService.isDark();
    });
    this.dark = this.darkService.isDark();
  }

}
