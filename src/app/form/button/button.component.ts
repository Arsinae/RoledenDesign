import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  public htmlCode = '<rd-button (buttonClick)="saveButton()" [color]="\'gradient-blue\'" [rounded]="true">Save</rd-button>';
  public tsCode = 'saveButton() {\n  console.log(\'Button click\');\n}\n';

  constructor() { }

  ngOnInit() {
  }

}
