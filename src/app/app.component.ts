import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '60%'
    });
  }
}
