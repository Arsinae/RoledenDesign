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
  @Input() sort = false;

  @Output() fileSelect: EventEmitter<any> = new EventEmitter();

  public searchText = '';
  public sortType = 'nameAsc';

  constructor() { }

  ngOnInit() {
  }

  get currentList() {
    let list: Array<ListElementDirective> = [];
    if (this.search) {
      for (const elem of this.data) {
        if (elem.title.toLowerCase().match(this.searchText.toLowerCase())) {
          list.push(elem);
        }
      }
    } else {
      list = this.data;
    }
    if (this.sort) {
     if (this.sortType === 'nameAsc') {
       this.sortAsc('name', list);
     } else {
       this.sortDesc('name', list);
     }
    }
    return list;
  }

  sortAsc(param, list) {
    list.sort(function(elem1, elem2) {
      let param1, param2;
      if (param === 'name') {
        param1 = elem1.title;
        param2 = elem2.title;
      }
      if (param1 < param2) {
        return -1;
      } else if (param1 > param2) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortDesc(param, list) {
    list.sort(function(elem1, elem2) {
      let param1, param2;
      if (param === 'name') {
        param1 = elem1.title;
        param2 = elem2.title;
      }
      if (param1 < param2) {
        return 1;
      } else if (param1 > param2) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  changeSort() {
    this.sortType = (this.sortType !== 'nameAsc') ? 'nameAsc' : 'nameDesc';
  }

  selectFile(elem) {
    this.fileSelect.emit(elem.file);
  }

}
