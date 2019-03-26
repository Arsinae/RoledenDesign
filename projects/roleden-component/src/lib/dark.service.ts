import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RDDarkService {

  private dark = new Subject<boolean>();

  constructor() { }

  isDark() {
    const classList = document.getElementsByTagName('body')[0].classList;
    return classList.contains('rdDark');
  }

  getDarkElement(): Observable<any> {
    const dark = document.querySelector('body');
    const observer = new MutationObserver((mutations) => {
      this.dark.next(true);
    });
    observer.observe(dark, {
      attributes: true,
      characterData: true
    });
    return this.dark.asObservable();
  }
}
