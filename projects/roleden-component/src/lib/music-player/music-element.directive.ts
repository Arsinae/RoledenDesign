import { Directive } from '@angular/core';

@Directive({
  selector: '[rdMusicElement]'
})
export class MusicElementDirective {

  title: string;
  channel: string;
  url: string;
  type: string;
  imageurl: string;

  constructor() { }

}
