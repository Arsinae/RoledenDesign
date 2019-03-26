import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RDAlert } from './alert.class';

@Injectable({
  providedIn: 'root'
})
export class RDAlertService {

  private subjects = new Subject<RDAlert>();

  constructor() { }

  getAlert(): Observable<any> {
    return this.subjects.asObservable();
  }

  addAlert(type, title, text) {
    this.subjects.next(<RDAlert>{type: type, title: title, text: text});
  }
}
