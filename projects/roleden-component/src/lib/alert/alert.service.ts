import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from './alert.class';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subjects = new Subject<Alert>();

  constructor() { }

  getAlert(): Observable<any> {
    return this.subjects.asObservable();
  }

  addAlert(type, title, text) {
    this.subjects.next(<Alert>{type: type, title: title, text: text});
  }
}
