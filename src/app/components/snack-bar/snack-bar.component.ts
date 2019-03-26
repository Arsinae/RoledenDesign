import { RDSnackBarService } from 'projects/roleden-component/src/lib/snack-bar/snack-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  public htmlCode = '<!-- Inside de app.component.html -->\n<rd-snack-bar></rd-snack-bar>\n';
  public tsCode = 'import { SnackBarService } from \'roleden-component\';\n\nexport class MyComponent implements OnInit {\n\n' +
    '  constructor(private snackBarService: SnackBarService) { }\n\n' +
    '  addSnackBar(type, title, text){\n    this.snackBarService.addSnackBar(type, title, text);\n  }\n}\n';

  constructor(private snackBarService: RDSnackBarService) { }

  ngOnInit() {
  }

  addDanger() {
    this.snackBarService.addSnackBar('danger', 'Danger', 'Big problems inc.');
  }

  addWarning() {
    this.snackBarService.addSnackBar('warning', 'Warning', 'Take care');
  }

  addSuccess() {
    this.snackBarService.addSnackBar('success', 'Success', 'You achieve something');
  }

  addInfo() {
    this.snackBarService.addSnackBar('info', 'Information', 'Nice informations');
  }
}
