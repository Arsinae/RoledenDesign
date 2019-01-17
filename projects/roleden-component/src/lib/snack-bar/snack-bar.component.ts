import { SnackBarService } from './snack-bar.service';
import { Component, OnInit, Input } from '@angular/core';
import { SnackBar } from './snack-bar.class';
import { trigger, transition, query, stagger, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'rd-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0.2, transform: 'translateY(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('.5s ease-in', keyframes([
              style({opacity: 1, offset: 0}),
              style({opacity: 0, transform: 'translateY(100%)', offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])
  ]
})
export class SnackBarComponent implements OnInit {

  @Input() timer = 5;

  public snackBars: Array<{snack: SnackBar, timer: any}> = [];

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
    this.snackBarService.getSnackBar().subscribe(snackBar => {
      const newSnack = {snack: snackBar, timer: setTimeout(() => {
        this.deleteOnTimer(newSnack);
      }, this.timer * 1000)};
      this.snackBars.push(newSnack);
    });
  }

  deleteOnTimer(closeAlert) {
    for (let i = 0; i < this.snackBars.length; i++) {
      if (this.snackBars[i].timer === closeAlert.timer) {
        this.snackBars.splice(i, 1);
      }
    }
  }

  closeSnackBar(index) {
    clearTimeout(this.snackBars[index].timer);
    this.snackBars.splice(index, 1);
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
