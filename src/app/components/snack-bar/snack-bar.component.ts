import { SnackBarService } from 'projects/roleden-component/src/lib/snack-bar/snack-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  constructor(private snackBarService: SnackBarService) { }

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
