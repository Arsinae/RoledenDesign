import { Component, OnInit } from '@angular/core';
import { MusicElementDirective } from 'projects/roleden-component/src/lib/music-player/music-element.directive';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  public playlist: Array<MusicElementDirective> = [
    {title: 'Fight Back', imageurl: '', channel: 'Neffex', url: '6vfP_4u7zik', type: 'youTube'},
    {title: 'Fight Back', imageurl: '', channel: 'Neffex', url: 'lJkEF0_QigU', type: 'youTube'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
