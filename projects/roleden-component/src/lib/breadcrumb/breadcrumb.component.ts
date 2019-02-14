import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BreadcrumbElementDirective} from './breadcrumb-element.directive';
import { DarkService } from '../dark.service';

@Component({
  selector: 'rd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() data: Array<BreadcrumbElementDirective> = [];
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
