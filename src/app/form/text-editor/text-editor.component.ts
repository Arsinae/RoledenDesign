import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  public htmlCode = '<rd-text-editor [(text)]="value" [height]="150"></rd-text-editor>\n' +
    '<span>Text raw: {{value}}</span>';
  public tsCode = 'public value = \'\';\n';

  constructor() { }

  ngOnInit() {
  }

}
