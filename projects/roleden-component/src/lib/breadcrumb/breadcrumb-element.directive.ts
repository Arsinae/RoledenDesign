import { Directive } from '@angular/core';

@Directive({
  selector: '[rdBreadcrumbElement]'
})
export class BreadcrumbElementDirective {

  public name = '';
  public file = '';

  constructor() { }

}
