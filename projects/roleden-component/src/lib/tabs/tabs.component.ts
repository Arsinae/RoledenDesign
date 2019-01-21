import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() title = '';

  public display = false;

  constructor() { }

  ngOnInit() {
  }

}
