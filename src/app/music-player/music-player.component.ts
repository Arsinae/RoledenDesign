import { Component, OnInit } from '@angular/core';
import { MusicElementDirective } from 'projects/roleden-component/src/lib/music-player/music-element.directive';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  public playlist: Array<MusicElementDirective> = [
    {title: 'Fight Back', imageurl: 'https://i.ytimg.com/vi/CYDP_8UTAus/default.jpg',
      channel: 'Neffex', url: '6vfP_4u7zik', type: 'youTube'},
    {title: 'Numb', imageurl: 'https://i.ytimg.com/vi/lJkEF0_QigU/default.jpg',
      channel: 'Neffex', url: 'lJkEF0_QigU', type: 'youTube'},
    {title: 'Destiny', imageurl: 'https://i.ytimg.com/vi/24C8r8JupYY/default.jpg',
      channel: 'Neffex', url: '24C8r8JupYY', type: 'youTube'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
