import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  public value = [];

  public color = 'red';

  constructor() { }

  ngOnInit() {
  }

}
