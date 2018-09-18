import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListElementDirective} from './list-element.directive';

@Component({
  selector: 'rd-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Array<ListElementDirective> = [];
  @Input() search = false;

  @Output() fileSelect: EventEmitter<any> = new EventEmitter();

  public searchText = '';

  constructor() { }

  ngOnInit() {
  }

  get currentList() {
    let list: Array<ListElementDirective> = [];
    if (this.search) {
      for (const elem of this.data) {
        if (elem.title.match(this.searchText)) {
          list.push(elem);
        }
      }
    } else {
      list = this.data;
    }
    return list;
  }

  selectFile(elem) {
    this.fileSelect.emit(elem.file);
  }

}
