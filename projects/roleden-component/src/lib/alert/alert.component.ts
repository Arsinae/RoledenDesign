import { RDAlert } from './alert.class';
import { Component, OnInit, Input } from '@angular/core';
import { RDAlertService } from './alert.service';
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
export class RDAlertComponent implements OnInit {

  @Input() timer = 5;

  public alerts: Array<{alert: RDAlert, timer: any}> = [];

  constructor(private alertService: RDAlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: RDAlert) => {
      const newAlert = {alert: alert, timer: setTimeout(() => {
        this.deleteOnTimer(newAlert);
      }, this.timer * 1000)};
      this.alerts.push(newAlert);
    });
  }

  deleteOnTimer(closeAlert) {
    for (let i = 0; i < this.alerts.length; i++) {
      if (this.alerts[i].timer === closeAlert.timer) {
        this.alerts.splice(i, 1);
      }
    }
  }

  closeAlert(index) {
    clearTimeout(this.alerts[index].timer);
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
