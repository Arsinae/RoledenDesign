import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() title = '';

  @Output() changeDisplay: EventEmitter<any> = new EventEmitter();

  public display = false;

  constructor() { }

  ngOnInit() {
  }

}
