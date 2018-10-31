import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BreadcrumbElementDirective} from './breadcrumb-element.directive';

@Component({
  selector: 'rd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() data: Array<BreadcrumbElementDirective> = [];
  @Input() color = 'gold';

  @Output() fileSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
