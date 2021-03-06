import { Component, OnInit } from '@angular/core';
import { RDAlertService } from 'projects/roleden-component/src/lib/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public htmlCode = '<!-- Inside de app.component.html -->\n<rd-alert></rd-alert>\n';
  public tsCode = 'import { RDAlertService } from \'roleden-component\';\n\nexport class MyComponent implements OnInit {\n\n' +
    '  constructor(private alertService: RDAlertService) { }\n\n' +
    '  addAlert(type, title, text){\n    this.alertService.addAlert(type, title, text);\n  }\n}\n';

  constructor(private alertService: RDAlertService) { }

  ngOnInit() {
  }

  addDanger() {
    this.alertService.addAlert('danger', 'Danger', 'Big problems inc.');
  }

  addWarning() {
    this.alertService.addAlert('warning', 'Warning', 'Take care');
  }

  addSuccess() {
    this.alertService.addAlert('success', 'Success', 'You achieve something');
  }

  addInfo() {
    this.alertService.addAlert('info', 'Information', 'Nice informations');
  }

}
