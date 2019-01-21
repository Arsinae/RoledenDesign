import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public tabs = ['Leto Atréides', 'Jessica Atréides', 'Paul Atréides', 'Alia Atréides', 'Leto II Atréides', 'Ghanima Atréides'];

  constructor() { }

  ngOnInit() {
  }

  cutTabs() {
    this.tabs.splice(0, 1);
  }

  putTabs() {
    this.tabs.push('a');
  }

}
