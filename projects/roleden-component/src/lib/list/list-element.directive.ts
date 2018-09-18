import { Directive } from '@angular/core';

@Directive({
  selector: '[rdListElement]'
})
export class ListElementDirective {

  public color = 'gold';
  public title = 'title';
  public file = null;
  public icon = 'far fa-file';

  constructor() { }

}
