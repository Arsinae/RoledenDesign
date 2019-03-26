import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BreadcrumbElement} from './breadcrumb-element.class';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() data: Array<BreadcrumbElement> = [];
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
