import { RDSnackBar } from './snack-bar.class';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RDSnackBarService {

  private subjects = new Subject<RDSnackBar>();

  constructor() { }

  getSnackBar(): Observable<any> {
    return this.subjects.asObservable();
  }

  addSnackBar(type, title, text) {
    this.subjects.next(<RDSnackBar>{type: type, title: title, text: text});
  }
}
