import { SnackBarService } from './snack-bar.service';
import { Component, OnInit } from '@angular/core';
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

  public snackBars: Array<SnackBar> = [];

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
    this.snackBarService.getSnackBar().subscribe(snackBar => {
      this.snackBars.push(snackBar);
    });
  }

  closeSnackBar(index) {
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
