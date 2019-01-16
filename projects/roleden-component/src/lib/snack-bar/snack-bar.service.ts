import { SnackBar } from './snack-bar.class';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private subjects = new Subject<SnackBar>();

  constructor() { }

  getSnackBar(): Observable<any> {
    return this.subjects.asObservable();
  }

  addSnackBar(type, title, text) {
    this.subjects.next(<SnackBar>{type: type, title: title, text: text});
  }
}
