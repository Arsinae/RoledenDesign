import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  data = [{name: 'Wiki', file: ''}, {name: 'Dune', file: ''}, {name: 'Sheana Brugh', file: ''}];

  constructor() { }

  ngOnInit() {
  }

}
