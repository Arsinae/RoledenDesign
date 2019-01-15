import { Component, OnInit } from '@angular/core';
import { AlertService } from 'projects/roleden-component/src/lib/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private alertSerrvice: AlertService) { }

  ngOnInit() {
  }

  addDanger() {
    this.alertSerrvice.addAlert('danger', 'Danger', 'Big problems inc.');
  }

  addWarning() {
    this.alertSerrvice.addAlert('warning', 'Warning', 'Take care');
  }

  addSuccess() {
    this.alertSerrvice.addAlert('success', 'Success', 'You achieve something');
  }

  addInfo() {
    this.alertSerrvice.addAlert('info', 'Information', 'Nice informations');
  }

}
