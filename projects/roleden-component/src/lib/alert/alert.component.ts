import { Alert } from './alert.class';
import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { trigger, transition, query, stagger, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'rd-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0.2, transform: 'translateX(75%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('.5s ease-in', keyframes([
              style({opacity: 1, transform: 'translateX(0)', offset: 0}),
              style({opacity: 0, transform: 'translateX(100%)', offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {

  public alerts: Array<Alert> = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      this.alerts.push(alert);
    });
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }

  getIcon(type) {
    if (type === 'danger') {
      return 'fas fa-exclamation-triangle';
    } else if (type === 'warning') {
      return 'fas fa-exclamation';
    } else if (type === 'success') {
      return 'fas fa-check';
    } else if (type === 'info') {
      return 'fas fa-info';
    }
  }

}
