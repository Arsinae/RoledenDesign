import { Directive } from '@angular/core';

@Directive({
  selector: '[rdMusicElement]'
})
export class MusicElementDirective {

  title: string;
  imageurl: string;
  channel: string;
  url: string;
  type: string;

  constructor() { }

}
