import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, group, query, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        group([query(':enter', animate('.3s linear', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, transform: 'translateX(100%)', offset: 1.0}),
        ])), {optional: true}),
        query(':leave', animate('.3s linear', keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, offset: 1.0}),
          ])), {optional: true})])
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('header') header;
  @ViewChild('page') page;
  public menu = false;

  constructor(public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    document.addEventListener('scroll', () => {
      this.setStickyHeader();
    });
    this.setStickyHeader();
  }

  setStickyHeader() {
    if (window.pageYOffset > 0) {
      this.header.nativeElement.classList.add('sticky');
      this.page.nativeElement.style.paddingTop = this.header.nativeElement.clientHeight + 'px';
    } else {
      this.header.nativeElement.classList.remove('sticky');
      this.page.nativeElement.style.paddingTop = 0;
    }
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      width: '60%',
      position: {top: '5%'}
    });
  }

  routeAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }
}
