import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

  public htmlCode = '<rd-input-file [accept]="\'image/*\'"></rd-input-file>';

  constructor() { }

  ngOnInit() {
  }

}
