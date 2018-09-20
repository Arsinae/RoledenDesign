import { Component, OnInit } from '@angular/core';
import {ListElementDirective} from 'roleden-component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public data: Array<ListElementDirective> = [{color: 'blue', title: 'Super Character', file: '', icon: 'fas fa-male', author: 'me'},
{color: 'red', title: 'Awesome Adventure', file: '', icon: 'fas fa-file', author: 'me'}, new ListElementDirective()];

  constructor() { }

  ngOnInit() {
  }

}
